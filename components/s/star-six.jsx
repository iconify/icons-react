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
		"content": `<style>.gf3gvfd0z {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.49 3.22l1.77 3.15q.49.87 1.49.86l3.61-.04q1-.02.49.85l-1.84 3.1q-.51.86 0 1.72l1.84 3.1q.51.86-.49.85l-3.61-.04q-1-.01-1.49.86l-1.77 3.15q-.49.87-.98 0l-1.77-3.15q-.49-.87-1.49-.86l-3.61.04q-1 .02-.49-.85l1.84-3.1q.51-.86 0-1.72l-1.84-3.1q-.51-.87.49-.85l3.61.04q1 .01 1.49-.86l1.77-3.15q.49-.87.98 0");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="gf3gvfd0z"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:star-six",
	});
}

export default Component;
