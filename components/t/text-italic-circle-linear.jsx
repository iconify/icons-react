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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w3r9-bcte {
  d: path("M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z");
}

.yhzh4emmw {
  stroke-linejoin: round;
  d: path("M8 17H10.6667M10.6667 17H13.3333M10.6667 17L13.3333 7M10.6667 7H13.3333M13.3333 7H16");
}
</style><g class="ipq1z-bjh"><path class="yhzh4emmw"/><path class="w3r9-bcte"/></g>`,
		"fallback": "solar:text-italic-circle-linear",
	});
}

export default Component;
