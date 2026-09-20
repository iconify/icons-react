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
		"content": `<style>.b0kaw4fzr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 9h14v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nvmmdk07k {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 4 3 9l5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pzovgl99o {
  d: path("M8 4 3 9l5 5");
}

.q5w-xob0a {
  d: path("M3 9h14v11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="nvmmdk07k"/><path class="b0kaw4fzr"/><path class="pzovgl99o"/><path class="q5w-xob0a"/></g>`,
		"fallback": "iconmind:reply-duotone-bold",
	});
}

export default Component;
