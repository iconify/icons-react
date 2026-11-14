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
		"content": `<style>.hczie2bib {
  d: path("M12 2.5A4.5 4.5 0 0 1 18 6a4.5 4.5 0 0 1 0 7a4.5 4.5 0 0 1-6 3.5A4.5 4.5 0 0 1 6 13a4.5 4.5 0 0 1 0-7a4.5 4.5 0 0 1 6-3.5Zm0 14v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yqbohe6qa {
  d: path("M12 9.5a1.25 1.25 0 0 1 2.5 0a2.5 2.5 0 0 1-5 0M12 21c1-1.5 3-2 5.5-1.75c-1 1.75-3 2.25-5.5 1.75Z");
}
</style><g class="ulnmmdpxh"><path class="hczie2bib"/><path class="yqbohe6qa"/></g>`,
		"fallback": "uix-sharp:peony",
	});
}

export default Component;
