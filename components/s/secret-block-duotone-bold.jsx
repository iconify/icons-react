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
		"content": `<style>.b6gnpqbjb {
  d: path("M10 10.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.c1kziyotx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 3H3v18h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cnjf-ebwx {
  fill: currentColor;
  d: path("M10 10.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.g-xhh1mor {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 13.5h2.5");
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

.nzb-j6sxx {
  d: path("M12 12.5V15");
}

.rnyye8dag {
  d: path("M12 13.5h2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v63bpsg0s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 12.5V15");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="cnjf-ebwx"/><path class="c1kziyotx"/><path class="hieqhxiaw"/><path class="v63bpsg0s"/><path class="g-xhh1mor"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="b6gnpqbjb"/><path class="nzb-j6sxx"/><path class="rnyye8dag"/></g>`,
		"fallback": "iconmind:secret-block-duotone-bold",
	});
}

export default Component;
