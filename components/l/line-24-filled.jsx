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
		"content": `<style>.v1v77_hyg {
  fill: currentColor;
  d: path("M21.707 2.293a1 1 0 0 1 0 1.414l-18 18a1 1 0 0 1-1.414-1.414l18-18a1 1 0 0 1 1.414 0");
}
</style><path class="v1v77_hyg"/>`,
		"fallback": "fluent:line-24-filled",
	});
}

export default Component;
