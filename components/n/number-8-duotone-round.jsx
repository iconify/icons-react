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
		"content": `<style>.nr5p_h15c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 11a4 4 0 1 1 0-8m0 8a4 4 0 1 0 0-8m0 8a5 5 0 0 0 0 10m0-10a5 5 0 0 1 0 10");
}
</style><path class="nr5p_h15c"/>`,
		"fallback": "coolicons:number-8-duotone-round",
	});
}

export default Component;
