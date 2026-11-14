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
		"content": `<style>.bpcae8bqt {
  d: path("M3 2.5h12v19H3Zm12 0L20.75 5v14L15 21.5Z");
}

.e0o0xpbzt {
  d: path("M5.5 11.5h7V18h-7Zm0 2.25h7M9 11.5v2.25M19 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bpcae8bqt"/><path class="e0o0xpbzt"/></g>`,
		"fallback": "uix-sharp:parcel-locker",
	});
}

export default Component;
