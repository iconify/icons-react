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
		"content": `<style>.nnwao2bjn {
  d: path("M12 3v7");
}

.or8vwebjl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.vq_7155oo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 3v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="or8vwebjl"/><path class="vq_7155oo"/><path class="ugdbidcqi"/><path class="nnwao2bjn"/></g>`,
		"fallback": "iconmind:power-duotone-bold",
	});
}

export default Component;
