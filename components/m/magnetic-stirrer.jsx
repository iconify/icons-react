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

.s4a3dabqh {
  d: path("M6.25 15.75V5.25a1 1 0 0 1 1-1h9.5a1 1 0 0 1 1 1v10.5Zm0-10.25L4.75 4m1.5 4.25h11.5M10 12.75h4");
}

.sml1g-bam {
  width: 18.5px;
  height: 5.5px;
  x: 2.75px;
  y: 15.75px;
  rx: 2px;
}

.wwkhbdc4g {
  d: path("M6.25 18.5h4.5");
}
</style><g class="hntgybcog"><path class="s4a3dabqh"/><rect class="sml1g-bam"/><path class="wwkhbdc4g"/></g>`,
		"fallback": "iconoven:magnetic-stirrer",
	});
}

export default Component;
