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
		"content": `<style>.pbtrxpbay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 6.5h20v9H2Zm3.5 9v3m3-3v3m7-3v3m3-3v3M12 8.5v5M9.5 11h5");
}
</style><path class="pbtrxpbay"/>`,
		"fallback": "uix-sharp:ram-plus",
	});
}

export default Component;
