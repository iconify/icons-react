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
		"content": `<style>.f_v_dfbgn {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
}

.kjfnivb3n {
  d: path("M8.669 22.61a4.276 4.276 0 1 1 8.551 0v2.78a4.276 4.276 0 1 1-8.551 0zm19.607 7.055V22.61A4.276 4.276 0 0 0 24 18.335h0a4.276 4.276 0 0 0-4.275 4.275m-.001 7.055v-11.33m19.046 9.173a4.27 4.27 0 0 1-3.715 2.157h0a4.276 4.276 0 0 1-4.275-4.275v-2.78a4.276 4.276 0 0 1 4.275-4.275h0a4.276 4.276 0 0 1 4.276 4.275V24H30.78");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="f_v_dfbgn"/><path class="kjfnivb3n"/></g>`,
		"fallback": "arcticons:oregon-one-mobile",
	});
}

export default Component;
