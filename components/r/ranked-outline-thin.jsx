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
		"content": `<style>.c2nlsybqj {
  d: path("M12 3s4 2 8 3v6c0 5 -4 8 -8 9 -4 -1 -8 -4 -8 -9V6c4 -1 8 -3 8 -3");
}

.hclo6jb2r {
  d: path("M8 16h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xtvmpefkx {
  d: path("m8 13 4 -4 4 4");
}
</style><g class="hntgybcog"><path class="c2nlsybqj"/><path class="xtvmpefkx"/><path class="hclo6jb2r"/></g>`,
		"fallback": "iconmind:ranked-outline-thin",
	});
}

export default Component;
