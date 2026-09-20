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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sk9ov1b7d {
  d: path("M16 7h-3l-3 3v12h10V12");
}

.t-tlxbnvp {
  d: path("M13 2h-3L7 5v12h10V7");
}
</style><g class="nrj6p8qat"><path class="t-tlxbnvp"/><path class="sk9ov1b7d"/></g>`,
		"fallback": "iconmind:mcp-resource-list-outline-regular",
	});
}

export default Component;
