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
		"content": `<style>.mnfuqpe-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.96 13.33h32.08a3.455 3.455 0 0 1 3.46 3.448v14.429a3.455 3.455 0 0 1-3.446 3.464H7.96A3.455 3.455 0 0 1 4.5 31.22V16.793a3.455 3.455 0 0 1 3.446-3.464z");
}

.prpzlvbkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.25 16.938v5.401H8.11v3.385h5.14v5.338h3.577v-5.338h5.334V22.34h-5.334v-5.4zm19.513 9.68a2.58 2.58 0 0 1-2.582 2.583h0a2.58 2.58 0 0 1-2.58-2.583a2.582 2.582 0 1 1 5.162-.001zm7.076-5.235a2.58 2.58 0 0 1-2.58 2.584h0a2.58 2.58 0 0 1-2.583-2.583v0A2.58 2.58 0 0 1 37.26 18.8h0a2.58 2.58 0 0 1 2.581 2.583");
}
</style><path class="mnfuqpe-b"/><path class="prpzlvbkh"/>`,
		"fallback": "arcticons:video-game",
	});
}

export default Component;
