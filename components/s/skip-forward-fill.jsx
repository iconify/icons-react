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
		"content": `<style>.gz3r3tbmb {
  fill: currentColor;
  d: path("m7.59 4.456l8 5a3 3 0 0 1 0 5.088l-8 5A2.999 2.999 0 0 1 3 17V7a3 3 0 0 1 4.59-2.544M19 19V5a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0");
}
</style><path class="gz3r3tbmb"/>`,
		"fallback": "coolicons:skip-forward-fill",
	});
}

export default Component;
