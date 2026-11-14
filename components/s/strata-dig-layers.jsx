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
		"content": `<style>.oda4a2bll {
  d: path("M3 3.5h18v17H3Z");
}

.rovth7z5f {
  d: path("M3 9c4-2 6 2 9 0s5 2 9 0M3 14.75c4-2 6 2 9 0s5 2 9 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oda4a2bll"/><path class="rovth7z5f"/></g>`,
		"fallback": "uix-sharp:strata-dig-layers",
	});
}

export default Component;
