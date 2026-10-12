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
		"content": `<style>.evew35b2m {
  d: path("M9.25 7.25v-3.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v3.5m-5.5 9.5v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pfpt48slt {
  cx: 12px;
  cy: 12px;
  r: 5.5px;
}

.zag8i3elj {
  d: path("M17.5 12h1.75M12 9.25V12l2 1.25");
}
</style><g class="hntgybcog"><path class="evew35b2m"/><circle class="pfpt48slt"/><path class="zag8i3elj"/></g>`,
		"fallback": "iconoven:watch-wrist",
	});
}

export default Component;
