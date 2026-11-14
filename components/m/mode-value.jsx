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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uhqo9yw4a {
  fill: currentColor;
  d: path("M12.75 19.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m0-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m0-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m0-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m0-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.ypwke6hjb {
  d: path("M3 19.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m10.5 8a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="uhqo9yw4a"/><path class="ypwke6hjb"/></g>`,
		"fallback": "uix:mode-value",
	});
}

export default Component;
