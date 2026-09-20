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
		"content": `<style>.fglxyivky {
  d: path("M18 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.k-jt90-vx {
  d: path("M11 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.lu0ovacdk {
  d: path("M4 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.lx3jidcux {
  d: path("M4 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.oq9ztqbxu {
  d: path("M11 4a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tr__z6b9j {
  d: path("M18 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="lu0ovacdk"/><path class="oq9ztqbxu"/><path class="fglxyivky"/><path class="lx3jidcux"/><path class="k-jt90-vx"/><path class="tr__z6b9j"/></g>`,
		"fallback": "iconmind:point-cloud-outline-bold",
	});
}

export default Component;
