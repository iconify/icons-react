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
		"content": `<style>.kw3lv3m0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16a9.5 9.5 0 0 1 19 0M12 16l3.75-4.25M12 16h.01");
}
</style><path class="kw3lv3m0j"/>`,
		"fallback": "uix-sharp:score-rule",
	});
}

export default Component;
