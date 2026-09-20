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
		"content": `<style>.eaep8gb-r {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M22 12a12.5 12.5 0 0 1 -20 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.moha5wbmp {
  d: path("M22 12a12.5 12.5 0 0 1 -20 0");
}

.nex0q68jd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t7jqbzdsw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 12a12.5 12.5 0 0 1 20 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uxyzhxvwz {
  d: path("M7 12h10");
}

.yix-58bnj {
  d: path("M2 12a12.5 12.5 0 0 1 20 0");
}
</style><g class="s0phu2bbs"><path class="t7jqbzdsw"/><path class="eaep8gb-r"/><path class="nex0q68jd"/><path class="yix-58bnj"/><path class="moha5wbmp"/><path class="uxyzhxvwz"/></g>`,
		"fallback": "iconmind:pii-mask-duotone-bold",
	});
}

export default Component;
