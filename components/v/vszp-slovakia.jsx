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
		"content": `<style>.ejwbgrrgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 17.704l6.247.422l13.121 13.12L36.3 18.814l7.2-1.09l-19.511 19.51z");
}

.hk20ls52v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.49 15.267l4.801.754l7.81 7.81l7.742-7.743l4.667-.7l-12.466 12.466z");
}

.smm-t2hjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.72 13.308a2.543 2.543 0 0 0-2.543-2.543c-.925 0-1.732.495-2.177 1.233a2.54 2.54 0 0 0-2.177-1.233a2.543 2.543 0 0 0-2.372 3.453C20.29 16.637 24 19.29 24 19.29s3.708-2.654 4.549-5.073c.109-.283.17-.589.17-.91");
}
</style><path class="ejwbgrrgk"/><path class="hk20ls52v"/><path class="smm-t2hjd"/>`,
		"fallback": "arcticons:vszp-slovakia",
	});
}

export default Component;
