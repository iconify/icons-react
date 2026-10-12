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
		"content": `<style>.e62m_hb6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7c1.54 0 1.54-1.5 3.08-1.5S7.37 7 8.91 7s1.54-1.5 3.08-1.5S13.53 7 15.07 7s1.54-1.5 3.08-1.5S19.69 7 21.23 7M2.75 12c1.54 0 1.54-1.5 3.08-1.5S7.37 12 8.91 12s1.54-1.5 3.08-1.5s1.54 1.5 3.08 1.5s1.54-1.5 3.08-1.5s1.54 1.5 3.08 1.5M2.75 17c1.54 0 1.54-1.5 3.08-1.5S7.37 17 8.91 17s1.54-1.5 3.08-1.5s1.54 1.5 3.08 1.5s1.54-1.5 3.08-1.5s1.54 1.5 3.08 1.5");
}
</style><path class="e62m_hb6g"/>`,
		"fallback": "iconoven:wave-crest-sharp",
	});
}

export default Component;
