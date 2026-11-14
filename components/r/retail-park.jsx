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
		"content": `<style>.bcsiu_mfd {
  d: path("M9.5 13V9h5v4M6 5.75h12M2.5 21.5h19m-19-5v5m6.25-5v5m6.5-5v5m6.25-5v5");
}

.ppxzn_yyj {
  d: path("M2.5 2.5h19V13h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ppxzn_yyj"/><path class="bcsiu_mfd"/></g>`,
		"fallback": "uix-sharp:retail-park",
	});
}

export default Component;
