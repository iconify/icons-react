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
		"content": `<style>.c_s6h8ded {
  fill: currentColor;
  d: path("M7 9a5 5 0 1 0 10 0A5 5 0 1 0 7 9");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.emvotkb4z {
  d: path("M4 20 20 4");
}

.i-2dnzb7m {
  d: path("M12 14v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w_lu3fbkz {
  d: path("M7 9a5 5 0 1 0 10 0A5 5 0 1 0 7 9");
}
</style><g class="s0phu2bbs"><path class="c_s6h8ded"/><path class="w_lu3fbkz"/><path class="i-2dnzb7m"/><path class="emvotkb4z"/></g>`,
		"fallback": "iconmind:unpin-duotone-bold",
	});
}

export default Component;
