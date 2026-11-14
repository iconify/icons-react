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
		"content": `<style>.lh9fudbbd {
  fill: currentColor;
  d: path("M21 18a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-5a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-5a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z");
}
</style><path class="lh9fudbbd"/>`,
		"fallback": "fluent:line-horizontal-4-24-filled",
	});
}

export default Component;
