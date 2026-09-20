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
		"content": `<style>.b4mmc1byx {
  d: path("M6.5 14h3");
}

.e2w7612gy {
  d: path("M6.5 10h3");
}

.emd5ykbgi {
  d: path("M8 10v4");
}

.murw5tb-p {
  d: path("M2 9a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="murw5tb-p"/><path class="emd5ykbgi"/><path class="e2w7612gy"/><path class="b4mmc1byx"/></g>`,
		"fallback": "iconmind:text-cursor-input-outline-bold",
	});
}

export default Component;
