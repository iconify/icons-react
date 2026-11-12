import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c1hkhtbrr {
  d: path("M22 19H14M2 19H10");
}

.do-vovbeq {
  d: path("M13 5L19 5");
}

.gqsddbcer {
  d: path("M13 11L19 11");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l1aw04d5b {
  d: path("M12 2H19C20.6569 2 22 3.34315 22 5C22 6.65685 20.6569 8 19 8H5C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2H8");
}

.p7fs_qxcd {
  stroke-linejoin: round;
  d: path("M6 5H6.0001");
}

.q-xlmac1a {
  d: path("M12 17V14");
}

.v7ennvywx {
  d: path("M14 14H5C3.34315 14 2 12.6569 2 11C2 9.34315 3.34315 8 5 8H19C20.6569 8 22 9.34315 22 11C22 12.6569 20.6569 14 19 14H18");
}

.vtj68-i3x {
  stroke-linejoin: round;
  d: path("M6 11H6.0001");
}

.zopjch_2q {
  cx: 12px;
  cy: 19px;
  r: 2px;
}
</style><g class="ipq1z-bjh"><path class="c1hkhtbrr"/><path class="q-xlmac1a"/><circle class="zopjch_2q"/><path class="v7ennvywx"/><path class="l1aw04d5b"/><path class="do-vovbeq"/><path class="gqsddbcer"/><path class="p7fs_qxcd"/><path class="vtj68-i3x"/></g>`,
		"fallback": "solar:server-path-broken",
	});
}

export default Component;
