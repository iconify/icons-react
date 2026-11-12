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
		"content": `<style>.ivnj9bb1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Zm-2 5h2m14 0h2m-9-5.4c.3 1.5 1.2 2.7 2.4 3.6c.9.9 1.2 2.1 1.2 3.6a3.6 3.6 0 1 1-7.2 0c0-.9.3-1.5.6-1.8a1.2 1.2 0 0 0 2.4 0c0-.9-.3-1.2-.6-1.8c-.6-1.2-.3-2.4 1.2-3.6");
}
</style><path class="ivnj9bb1v"/>`,
		"fallback": "coolicons:meter-gas-round",
	});
}

export default Component;
