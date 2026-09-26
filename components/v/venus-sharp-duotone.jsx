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

.kixvbiqhq {
  d: path("M12 14L12 23M7.5 19L16.5 19");
}

.ui59x3aub {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 8C19 11.866 15.866 15 12 15C8.134 15 5 11.866 5 8C5 4.134 8.134 1 12 1C15.866 1 19 4.134 19 8Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="ui59x3aub"/><path class="kixvbiqhq"/></g>`,
		"fallback": "keyline-icons:venus-sharp-duotone",
	});
}

export default Component;
