import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gwhn798bv {
  fill: currentColor;
  d: path("M10 16.5a6.5 6.5 0 1 1 6.5-6.5H18a8 8 0 1 0-8 8zm4.75-5.5A3.75 3.75 0 0 0 11 14.75v7.5A3.75 3.75 0 0 0 14.75 26h7.5A3.75 3.75 0 0 0 26 22.25v-7.5A3.75 3.75 0 0 0 22.25 11zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25h7.5a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25z");
}
</style><path class="gwhn798bv"/>`,
		"fallback": "fluent:shapes-28-regular",
	});
}

export default Component;
