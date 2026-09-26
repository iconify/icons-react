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
		"content": `<style>.areclccgu {
  d: path("M14 12L7 12M10.2929 8.7071L7 12L10.2929 15.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qg_mezd2z {
  stroke-opacity: 0.4;
  d: path("M21 3L21 21L3 21L3 3L21 3ZM17 3L17 21M8 3L8 6M8 21L8 18");
}
</style><g class="gp_8x1bzb"><path class="qg_mezd2z"/><path class="areclccgu"/></g>`,
		"fallback": "keyline-icons:table-columns-merge-previous-sharp-duotone",
	});
}

export default Component;
