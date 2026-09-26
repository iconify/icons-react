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

.owf9hiboi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20 11C20 15.9706 15.9706 20 11 20C6.0294 20 2 15.9706 2 11C2 6.0294 6.0294 2 11 2C15.9706 2 20 6.0294 20 11ZM12 10L15 10L15 12L12 12L12 15L10 15L10 12L7 12L7 10L10 10L10 7L12 7L12 10Z");
  stroke: none;
}

.xmeb_n1nn {
  d: path("M16.2929 16.2929L21.2929 21.2929");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="owf9hiboi"/><path class="xmeb_n1nn"/></g>`,
		"fallback": "keyline-icons:search-2-plus-sharp-fill",
	});
}

export default Component;
