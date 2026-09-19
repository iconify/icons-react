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
		"content": `<style>.ad2p6fbab {
  cx: 24px;
  cy: 15.048px;
  r: 3.259px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.upmanl39m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.073 24.595a15.28 15.28 0 0 1 0-19.094m23.854 19.093a15.28 15.28 0 0 0 0-19.094M17.509 21.988a9.5 9.5 0 0 1-.002-13.877M30.49 21.988a9.5 9.5 0 0 0 .002-13.877");
}

.vlddlfp3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.39 42.5l10.204-24.217M34.61 42.5L24.406 18.283m3.346 8.528l-8.911 3.22l12.382 4.721l-16.45 4.584");
}
</style><path class="upmanl39m"/><circle class="ad2p6fbab"/><path class="vlddlfp3m"/>`,
		"fallback": "arcticons:radyo-kulesi",
	});
}

export default Component;
