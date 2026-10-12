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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hol8yqbue {
  d: path("M6.75 12.25c1 1.15 1.5 1.9 1.5 2.6a1.5 1.5 0 0 1-3 0c0-.7.5-1.45 1.5-2.6");
}

.s3lbkm1-p {
  width: 4px;
  height: 2.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 1px;
}

.v9-06ibay {
  width: 8px;
  height: 13px;
  x: 2.75px;
  y: 8.25px;
  rx: 2.5px;
}

.ygphxfbhc {
  cx: 17.25px;
  cy: 17.25px;
  r: 4px;
}

.z6yqdkbsz {
  d: path("M15.5 15.75H19m-3.5 3H19");
}
</style><g class="hntgybcog"><rect class="s3lbkm1-p"/><rect class="v9-06ibay"/><path class="hol8yqbue"/><circle class="ygphxfbhc"/><path class="z6yqdkbsz"/></g>`,
		"fallback": "iconoven:makeup-remover",
	});
}

export default Component;
