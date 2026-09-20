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
		"content": `<style>.id4vqxf8c {
  d: path("m4 14 5 -5h11");
}

.j8eihab4w {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m4 14 5 -5h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mogmoy4jl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m4 19 5 -5h4l4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qlw91sbif {
  d: path("m4 19 5 -5h4l4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="j8eihab4w"/><path class="mogmoy4jl"/><path class="id4vqxf8c"/><path class="qlw91sbif"/></g>`,
		"fallback": "iconmind:overfit-gap-duotone-bold",
	});
}

export default Component;
