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
		"content": `<style>.ipfslab1u {
  cx: 20.605px;
  cy: 35px;
  r: 3.105px;
}

.k6hnefbte {
  d: path("M30.5 35.011h-6.79m4.515 1.858v-1.858");
}

.kffijubgv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.59 36.89c-7.003-9.732-4.792-23.299 4.94-30.303A21.7 21.7 0 0 1 24 2.5c11.99.117 21.614 9.93 21.498 21.92a21.7 21.7 0 0 1-4.088 12.47L31.08 20l-1.86 3.17l1.88 3.23L24 14.17l-5.27 9l1.9 3.27L16.91 20z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="kffijubgv"/><g class="y9tr6bcfx"><circle class="ipfslab1u"/><path class="k6hnefbte"/></g>`,
		"fallback": "arcticons:nordpass",
	});
}

export default Component;
