import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o8750-_fk {
  fill: currentColor;
  d: path("M5 5q-.425 0-.712-.288T4 4t.288-.712T5 3h14q.425 0 .713.288T20 4t-.288.713T19 5z");
}
</style><path class="o8750-_fk"/>`,
		"fallback": "material-symbols:maximize-outline-rounded",
	});
}

export default Component;
