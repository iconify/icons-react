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
		"content": `<style>.d_2wopbad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.5 11.738l-3.75 5l-3.75-5l-3.75 5l-3.75-5v10.299h15z");
}

.fyl-gnt7x {
  cx: 29.375px;
  cy: 30.887px;
  r: 5.375px;
}

.gb87zqbby {
  cx: 7.875px;
  cy: 30.887px;
  r: 5.375px;
}

.ra5-11bvm {
  cx: 40.125px;
  cy: 30.887px;
  r: 5.375px;
}

.s4yo5xbpu {
  cx: 18.625px;
  cy: 30.887px;
  r: 5.375px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="gb87zqbby"/><circle class="s4yo5xbpu"/><circle class="fyl-gnt7x"/><circle class="ra5-11bvm"/></g><path class="d_2wopbad"/>`,
		"fallback": "arcticons:ludo-king",
	});
}

export default Component;
