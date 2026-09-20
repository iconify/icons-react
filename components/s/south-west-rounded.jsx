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
		"content": `<style>.dhru11l-r {
  fill: currentColor;
  d: path("M6 19q-.425 0-.712-.288T5 18v-8q0-.425.288-.712T6 9t.713.288T7 10v5.6L17.9 4.7q.275-.275.7-.275t.7.275t.275.7t-.275.7L8.4 17H14q.425 0 .713.288T15 18t-.288.713T14 19z");
}
</style><path class="dhru11l-r"/>`,
		"fallback": "material-symbols:south-west-rounded",
	});
}

export default Component;
