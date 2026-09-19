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
		"content": `<style>.bp77s2k6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.9 26.93l12.18 6.11M30 15l-12.1 6.07");
}

.gpv1e8ktn {
  cx: 12.05px;
  cy: 24px;
  r: 6.55px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.r-35j_bwh {
  cx: 35.95px;
  cy: 35.93px;
  r: 6.55px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xbgus56oe {
  cx: 35.85px;
  cy: 12.07px;
  r: 6.55px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="gpv1e8ktn"/><circle class="xbgus56oe"/><circle class="r-35j_bwh"/><path class="bp77s2k6q"/>`,
		"fallback": "arcticons:sharetoclipboard",
	});
}

export default Component;
