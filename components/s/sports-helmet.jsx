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
		"content": `<style>.c-4xeztvv {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 12.5h.01");
}

.p817m_8ob {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.25A8.75 8.75 0 0 1 20.25 9H14.5a2 2 0 0 0-2 2v2.25a2 2 0 0 0 2 2H16v3.5a1.5 1.5 0 0 1-1.5 1.5h-6A5.25 5.25 0 0 1 3.25 15v-3A8.75 8.75 0 0 1 12 3.25");
}

.tp909zbam {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 11.75h4.75v3.5a2.5 2.5 0 0 1-2.5 2.5H18");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="p817m_8ob"/><path class="c-4xeztvv"/><path class="tp909zbam"/></g>`,
		"fallback": "iconoven:sports-helmet",
	});
}

export default Component;
