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
		"content": `<style>.bod4n0b3z {
  d: path("M2 18h20");
}

.eoz5n0suo {
  d: path("m4 11 2.5 -2.5L9 11l2.5 -2.5L14 11l2.5 -2.5L19 11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.szg40d_7w {
  d: path("M2 7v8h20V7");
}
</style><g class="s0phu2bbs"><path class="szg40d_7w"/><path class="eoz5n0suo"/><path class="bod4n0b3z"/></g>`,
		"fallback": "iconmind:pool-outline-bold",
	});
}

export default Component;
