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

.np3wecbsw {
  fill: currentColor;
  d: path("M3 11L21 11L21 2L3 2L3 11Z");
  stroke: none;
}

.z71h2zbod {
  d: path("M6 20L3 20L3 2L21 2L21 20L18 20M3 11L21 11M12 15L12 23M8 19L16 19");
}
</style><g class="gp_8x1bzb"><path class="np3wecbsw"/><path class="z71h2zbod"/></g>`,
		"fallback": "keyline-icons:table-rows-add-below-sharp-fill",
	});
}

export default Component;
