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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.l4wjw054o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20 20C20 20.552 19.552 21 19 21C18.448 21 18 20.552 18 20C18 19.448 18.448 19 19 19C19.552 19 20 19.448 20 20Z");
  stroke: none;
}

.lqi-0mugw {
  d: path("M13 20H2V4H22V11M2 7L11.293 11C11.715 11.282 12.285 11.282 12.707 11L22 7M19 13V17");
}
</style><g class="gp_8x1bzb"><path class="lqi-0mugw"/><path clip-rule="evenodd" class="l4wjw054o"/></g>`,
		"fallback": "keyline-icons:mail-alert-sharp",
	});
}

export default Component;
