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
		"content": `<style>.ftdro6baa {
  cx: 18.93px;
  cy: 8px;
  r: 1.25px;
}

.hjru5mbwv {
  cx: 12px;
  cy: 4px;
  r: 1.25px;
}

.jwub2_s5t {
  cx: 18.93px;
  cy: 16px;
  r: 1.25px;
}

.n2he7vj4w {
  cx: 12px;
  cy: 20px;
  r: 1.25px;
}

.n31yb52ts {
  d: path("m12.4 5.63l1.32 2.06l.41.63l.74.03l2.44.12l.75.03l-.34.67l-1.13 2.16l-.34.67l.34.67l1.13 2.16l.34.67l-.75.03l-2.44.12l-.74.03l-.41.63l-1.32 2.06l-.4.63l-.4-.63l-1.32-2.06l-.4-.63l-.75-.03l-2.44-.12l-.75-.03l.34-.67l1.13-2.16l.34-.67l-.34-.67l-1.13-2.16l-.34-.67l.75-.03l2.44-.12l.74-.03l.41-.63l1.32-2.06L12 5z");
}

.peiq2hfxm {
  cx: 12px;
  cy: 12px;
  r: 1.75px;
}

.rsnu82btf {
  cx: 5.07px;
  cy: 16px;
  r: 1.25px;
}

.s67nsxbky {
  cx: 5.07px;
  cy: 8px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="n31yb52ts"/><circle class="hjru5mbwv"/><circle class="ftdro6baa"/><circle class="jwub2_s5t"/><circle class="n2he7vj4w"/><circle class="rsnu82btf"/><circle class="s67nsxbky"/><circle class="peiq2hfxm"/></g>`,
		"fallback": "iconoven:police-badge-sharp",
	});
}

export default Component;
