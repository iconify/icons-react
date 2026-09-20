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
		"content": `<style>.c1kziyotx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 3H3v18h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.duvzkqbwy {
  d: path("M8 9.5h8");
}

.fkbnznu9g {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 9.5h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hieqhxiaw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 3h4v18h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.m6r9k7-tj {
  d: path("M8 14.5h8");
}

.rc1ep3b-d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 14.5h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="c1kziyotx"/><path class="hieqhxiaw"/><path class="fkbnznu9g"/><path class="rc1ep3b-d"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="duvzkqbwy"/><path class="m6r9k7-tj"/></g>`,
		"fallback": "iconmind:invariant-duotone-bold",
	});
}

export default Component;
