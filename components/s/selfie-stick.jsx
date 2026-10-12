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
		"content": `<style>.fnudolgtt {
  width: 7px;
  height: 9.5px;
  x: 12.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.gz5_b-swj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.25 5.75h.01");
}

.u6fu9x6fo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.25 12.25l-5 5m.53.53l-1.06-1.06q-.71-.71-1.42 0l-1.33 1.33q-.71.71 0 1.42l1.06 1.06q.71.71 1.42 0l1.33-1.33q.71-.71 0-1.42");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="fnudolgtt"/><path class="gz5_b-swj"/><path class="u6fu9x6fo"/></g>`,
		"fallback": "iconoven:selfie-stick",
	});
}

export default Component;
