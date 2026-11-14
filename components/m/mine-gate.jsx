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
		"content": `<style>.hlttrz0oo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m16-19v19M4 9.75h16v4.5H4Zm4 4.5l3-4.5m2 4.5l3-4.5");
}
</style><path class="hlttrz0oo"/>`,
		"fallback": "uix-sharp:mine-gate",
	});
}

export default Component;
