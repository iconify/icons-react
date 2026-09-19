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
		"content": `<style>.c9x-2ib8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.185 36.956V4.5s13.009 5.782 7.542 22.015");
}

.hp1l-_bsw {
  cx: 19.558px;
  cy: 36.956px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.627px;
  ry: 6.544px;
}
</style><ellipse class="hp1l-_bsw"/><path class="c9x-2ib8w"/>`,
		"fallback": "arcticons:raag",
	});
}

export default Component;
