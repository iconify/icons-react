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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fgfmfev2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.925 19.907v8h4m5.98-.937c-.3.6-1 1-1.7 1c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2s2 .9 2 2v.7h-4m12.085-.105zc0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.6v-2.7c0-1.5 1.2-2.7 2.7-2.6c1.5 0 2.6 1.2 2.6 2.6m7.217 3.289c0 1.1-.9 2-2 2s-2-.9-2-2v-1.3c0-1.1.9-2 2-2s2 .9 2 2m0 3.3v-5.4m3.268 2.072c0-1.1.9-2 2-2s2 .9 2 2v1.3c0 1.1-.9 2-2 2s-2-.9-2-2m0 2.1v-8");
}
</style><circle class="cpk0fnbgt"/><path class="fgfmfev2t"/>`,
		"fallback": "arcticons:lecab",
	});
}

export default Component;
