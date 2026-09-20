import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oqqj0_blv {
  fill: currentColor;
  d: path("M4.25 14a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-.75.75m5 4a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v14.5a.75.75 0 0 1-.75.75m4.25-7.75a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-1.5 0z");
}
</style><path class="oqqj0_blv"/>`,
		"fallback": "fluent:text-align-right-rotate-270-20-filled",
	});
}

export default Component;
