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
		"content": `<style>.eoz_i9lrw {
  cx: 24px;
  cy: 24px;
  r: 6.833px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fdbmobc0r {
  cx: 37.667px;
  cy: 24px;
  r: 6.833px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ue4vj2ylz {
  cx: 10.333px;
  cy: 24px;
  r: 6.833px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ue4vj2ylz"/><circle class="eoz_i9lrw"/><circle class="fdbmobc0r"/>`,
		"fallback": "arcticons:looopings",
	});
}

export default Component;
