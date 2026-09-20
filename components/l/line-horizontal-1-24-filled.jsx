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
		"content": `<style>.kzgbwzt8h {
  fill: currentColor;
  d: path("M2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1");
}
</style><path class="kzgbwzt8h"/>`,
		"fallback": "fluent:line-horizontal-1-24-filled",
	});
}

export default Component;
