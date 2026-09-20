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
		"content": `<style>.h2-2dgnfu {
  d: path("M12 3v18");
}

.m7gli2e_k {
  d: path("M16.5 12.5 12 17");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.srofgib5x {
  d: path("M7.5 6.5 12 11");
}
</style><g class="s0phu2bbs"><path class="h2-2dgnfu"/><path class="srofgib5x"/><path class="m7gli2e_k"/></g>`,
		"fallback": "iconmind:trunk-based-outline-bold",
	});
}

export default Component;
