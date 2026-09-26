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
		"content": `<style>.e_3j-yy9k {
  stroke-opacity: 0.4;
  d: path("M21 19L12 19");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zzwadwbzf {
  d: path("M8 4.5L8 15.5M3.6 13.3L12.4 6.7M3.6 6.7L12.4 13.3");
}
</style><g class="gp_8x1bzb"><path class="zzwadwbzf"/><path class="e_3j-yy9k"/></g>`,
		"fallback": "keyline-icons:terminal-asterisk-sharp-two-tone",
	});
}

export default Component;
