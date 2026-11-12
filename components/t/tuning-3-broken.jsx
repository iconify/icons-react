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
		"content": `<style>.cl5kvxb6w {
  d: path("M12 10V7.5M12 5.5V5");
}

.h_tsn8bxt {
  cx: 12px;
  cy: 12px;
  r: 2px;
}

.imrhgbc8c {
  cx: 20px;
  cy: 14px;
  r: 2px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j3t_yv6ja {
  d: path("M20 19L20 16");
}

.ml0f3uy3t {
  d: path("M12 19V14");
}

.n9mrrlban {
  d: path("M4 5V7.66667");
}

.qbe_3qbje {
  cx: 4px;
  cy: 10px;
  r: 2px;
}

.qkb6nu2hb {
  d: path("M4 17.5V19M4 12V14.75");
}

.qpr92sbth {
  d: path("M20 6.5V5M20 12V9.25");
}
</style><g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><circle class="imrhgbc8c"/><circle class="qbe_3qbje"/><path class="qkb6nu2hb"/><path class="qpr92sbth"/><path class="ml0f3uy3t"/><path class="j3t_yv6ja"/><path class="n9mrrlban"/><path class="cl5kvxb6w"/></g>`,
		"fallback": "solar:tuning-3-broken",
	});
}

export default Component;
