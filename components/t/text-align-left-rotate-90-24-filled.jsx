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
		"content": `<style>.te1i-z8gp {
  fill: currentColor;
  d: path("M18 2a1 1 0 0 1 1 1v15a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M6 2a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m7 1a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0z");
}
</style><path class="te1i-z8gp"/>`,
		"fallback": "fluent:text-align-left-rotate-90-24-filled",
	});
}

export default Component;
