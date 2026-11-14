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
		"content": `<style>.d4_hyep7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.445 16.312L16.312 3.445a.482.482 0 0 1 .815.246a1.35 1.35 0 0 0 1.06 1.061a1.35 1.35 0 0 1 1.061 1.061a1.35 1.35 0 0 0 1.061 1.06a.482.482 0 0 1 .246.815L7.688 20.555a.482.482 0 0 1-.815-.246a1.35 1.35 0 0 0-1.06-1.061a1.35 1.35 0 0 1-1.061-1.061a1.35 1.35 0 0 0-1.061-1.06a.482.482 0 0 1-.246-.815m2.014-2.014l4.243 4.243m4.596-13.082l4.243 4.243");
}
</style><path class="d4_hyep7b"/>`,
		"fallback": "uix:sachet",
	});
}

export default Component;
