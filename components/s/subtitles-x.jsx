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
		"content": `<style>.xuhifi66g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.1 19H2.5V5h19v7.6M6 12h3.5m3 0h2.6m.8 0H18M6 15.5h5.6m3.9 0l5 5m0-5l-5 5");
}
</style><path class="xuhifi66g"/>`,
		"fallback": "uix-sharp:subtitles-x",
	});
}

export default Component;
