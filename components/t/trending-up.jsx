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

.kl_ihr82r {
  d: path("M15.25 6.75h6v6");
}

.ybu90co9r {
  d: path("m2.75 17.25l6-6l4 4l8.5-8.5");
}
</style><g class="hntgybcog"><path class="ybu90co9r"/><path class="kl_ihr82r"/></g>`,
		"fallback": "iconoven:trending-up",
	});
}

export default Component;
