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
		"content": `<style>.ezfuhbbdz {
  d: path("m12 2.5l9.5 9.5l-9.5 9.5L2.5 12Z");
}

.rch1tfw0w {
  d: path("M12 17c-1.75 0-2.75-1-2.75-2.25c0-1.5 1.75-2 2-3.75c.75.5 1 1.25 1 2c.75-.25 1.25-1 1.5-1.5c.75 1 1 2 1 3.25S13.75 17 12 17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ezfuhbbdz"/><path class="rch1tfw0w"/></g>`,
		"fallback": "uix-sharp:risk-peril-fire",
	});
}

export default Component;
