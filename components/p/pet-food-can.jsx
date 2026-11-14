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
		"content": `<style>.u2hto2bym {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.5 3.75h-15q-.932 0-1.591.659T2.25 6q0 1.837 1.5 2.174V18q0 2.25 2.25 2.25h12q2.25 0 2.25-2.25V8.174q1.5-.337 1.5-2.174q0-2.25-2.25-2.25m-.75 11.5H5.25v-3.5h13.5zm-13.5 1.5h13.5V18q0 .75-.75.75H6q-.75 0-.75-.75zm0-6.5v-2h13.5v2z");
}
</style><path class="u2hto2bym"/>`,
		"fallback": "uix-solid:pet-food-can",
	});
}

export default Component;
