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
		"content": `<style>.t90f8rbgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 2C11.4322 4.6962 10 8.2767 10 12C10 15.7233 11.4322 19.3038 14 22");
}
</style><path class="t90f8rbgi"/>`,
		"fallback": "keyline-icons:parenthesis-left-fill",
	});
}

export default Component;
