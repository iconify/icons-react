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
		"content": `<style>.fcexrcb7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.094 42.496L10.57 40.923a2.46 2.46 0 0 1-2.305-2.217l-1.748-17.74a2.336 2.336 0 0 1 2.059-2.55l30.172-3.458a2.463 2.463 0 0 1 2.735 2.655L39.56 40.36a2.336 2.336 0 0 1-2.465 2.135Zm-17.787-9.312l8.674-8.674");
}

.gnquf3bal {
  cx: 19.846px;
  cy: 25.157px;
  r: 1.329px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ui7jxo_ew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.981 16.192s8.387-7.503 5.909-9.982s-8.98 1.653-10.06 10.458c-4.235-4.854-9.618-8.087-11.27-5.537c-2.265 3.496 5.658 6.18 5.658 6.18");
}

.vs2wafbrp {
  cx: 27.445px;
  cy: 32.715px;
  r: 1.329px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="fcexrcb7b"/><path class="ui7jxo_ew"/><circle class="gnquf3bal"/><circle class="vs2wafbrp"/>`,
		"fallback": "arcticons:vale-bonus",
	});
}

export default Component;
