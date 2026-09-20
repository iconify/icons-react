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
		"content": `<style>.dui-9ojgu {
  d: path("M7 12 3 8");
}

.eapwvqbey {
  d: path("M3 13h18c-1 4 -4 7 -9 7s-8 -3 -9 -7");
}

.nhdek5nuo {
  fill: currentColor;
  d: path("M3 13h18c-1 4 -4 7 -9 7s-8 -3 -9 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.q5jw2tb7h {
  d: path("m17 12 4 -4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="nhdek5nuo"/><path class="eapwvqbey"/><path class="dui-9ojgu"/><path class="q5jw2tb7h"/></g>`,
		"fallback": "iconmind:rowing-duotone-bold",
	});
}

export default Component;
