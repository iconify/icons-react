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
		"content": `<style>.lwkq7ebxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.666 14.584h29.356m-29.356 0l7.044-8.372a2 2 0 0 1 1.53-.712h19.52a2 2 0 0 1 1.53.712l6.574 7.814a2 2 0 0 1 .47 1.287v23.871a3.316 3.316 0 0 1-3.316 3.316H8.982a3.316 3.316 0 0 1-3.316-3.316V26.88M24 14.584v-3.545M5.666 22.449v-1.551");
}

.vgecuup5f {
  cx: 31.477px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.32px;
  ry: 3.102px;
}
</style><path class="lwkq7ebxm"/><ellipse class="vgecuup5f"/>`,
		"fallback": "arcticons:mypostnordapp",
	});
}

export default Component;
