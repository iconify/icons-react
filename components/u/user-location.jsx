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
		"content": `<style>.d52csib2v {
  cx: 9.5px;
  cy: 7.75px;
  r: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tgeljqywg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20.25h11a.75.75 0 0 0 .75-.75c0-3-2.8-5.25-6.25-5.25S3.25 16.5 3.25 19.5a.75.75 0 0 0 .75.75m14.25-5s-3-2.9-3-5.5a3 3 0 0 1 6 0c0 2.6-3 5.5-3 5.5");
}

.wsaeyhjdn {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.25 9.75h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="d52csib2v"/><path class="tgeljqywg"/><path class="wsaeyhjdn"/></g>`,
		"fallback": "iconoven:user-location",
	});
}

export default Component;
