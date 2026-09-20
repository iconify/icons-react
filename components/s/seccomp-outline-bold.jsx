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
		"content": `<style>.b-pphqpeq {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.ef-vngpaz {
  d: path("M12.5 12 10 9.5");
}

.kr8hxqbfz {
  d: path("M10 9.5h7L14.5 12v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sfnyx4wnk {
  d: path("M6 6v14");
}
</style><g class="s0phu2bbs"><path class="b-pphqpeq"/><path class="sfnyx4wnk"/><path class="kr8hxqbfz"/><path class="ef-vngpaz"/></g>`,
		"fallback": "iconmind:seccomp-outline-bold",
	});
}

export default Component;
