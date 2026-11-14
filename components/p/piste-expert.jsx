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
		"content": `<style>.ccmgq7b4f {
  d: path("M12 11v10.5m-3 0h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yj3b4r-dx {
  fill: currentColor;
  d: path("m3.561 6.939l1.878-1.878a1.5 1.5 0 0 1 2.122 0l1.878 1.878a1.5 1.5 0 0 1 0 2.122l-1.878 1.878a1.5 1.5 0 0 1-2.122 0L3.561 9.061a1.5 1.5 0 0 1 0-2.122m11 0l1.878-1.878a1.5 1.5 0 0 1 2.122 0l1.878 1.878a1.5 1.5 0 0 1 0 2.122l-1.878 1.878a1.5 1.5 0 0 1-2.122 0l-1.878-1.878a1.5 1.5 0 0 1 0-2.122");
}
</style><g class="hntgybcog"><path class="yj3b4r-dx"/><path class="ccmgq7b4f"/></g>`,
		"fallback": "uix:piste-expert",
	});
}

export default Component;
