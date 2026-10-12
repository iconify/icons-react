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
		"content": `<style>.l57ozh_fr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 12.25h.01m3.99 0h.01M10 16h.01M14 16h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ysqkh55uc {
  width: 9.5px;
  height: 18.5px;
  x: 7.25px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.zz9p51bci {
  cx: 12px;
  cy: 7px;
  r: 1.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="y9tr6bcfx"><rect class="ysqkh55uc"/><circle class="zz9p51bci"/><path class="l57ozh_fr"/></g>`,
		"fallback": "iconoven:remote",
	});
}

export default Component;
