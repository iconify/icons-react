import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qtiiljbpv {
  d: path("m28.903 32.01l3.225-3.226l9.755 9.755l-3.226 3.225zm1.483-4.963l-3.222 3.223");
}

.v8rgnlbmc {
  cx: 17.808px;
  cy: 17.804px;
  r: 13.041px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="v8rgnlbmc"/><path class="qtiiljbpv"/></g>`,
		"fallback": "arcticons:pixel-search",
	});
}

export default Component;
