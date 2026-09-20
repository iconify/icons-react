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
		"content": `<style>.gyi-tobvb {
  d: path("M20 5v14");
}

.ja82agbmj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M20 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ldg0adrzx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7.69 8.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m1k1s7nte {
  d: path("M10 12h10");
}

.n_5sjmbib {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ttbqujc9j {
  d: path("M7.69 8.37a4 4 0 1 1 -3.38 0");
}
</style><g class="s0phu2bbs"><path class="ldg0adrzx"/><path class="n_5sjmbib"/><path class="ja82agbmj"/><path class="ttbqujc9j"/><path class="m1k1s7nte"/><path class="gyi-tobvb"/></g>`,
		"fallback": "iconmind:leash-long-duotone-bold",
	});
}

export default Component;
