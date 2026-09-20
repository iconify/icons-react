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
		"content": `<style>.h1olrgb6t {
  fill: currentColor;
  d: path("M6 13q-.425 0-.712-.288T5 12t.288-.712T6 11h12q.425 0 .713.288T19 12t-.288.713T18 13z");
}
</style><path class="h1olrgb6t"/>`,
		"fallback": "material-symbols:remove-outline-rounded",
	});
}

export default Component;
