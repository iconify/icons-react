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
		"content": `<style>.z9hy98wfe {
  fill: currentColor;
  d: path("M13 13v8h8v-8zM3 21h8v-8H3zM3 3v8h8V3zm13.66-1.31L11 7.34L16.66 13l5.66-5.66z");
}
</style><path class="z9hy98wfe"/>`,
		"fallback": "ic:sharp-widgets",
	});
}

export default Component;
