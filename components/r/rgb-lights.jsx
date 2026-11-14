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

.ic3xxhb-w {
  d: path("M6.5 8.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.wr03derli {
  d: path("M2.75 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.x-6arxdai {
  d: path("M10.25 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}
</style><g class="hntgybcog"><path class="ic3xxhb-w"/><path class="wr03derli"/><path class="x-6arxdai"/></g>`,
		"fallback": "uix:rgb-lights",
	});
}

export default Component;
