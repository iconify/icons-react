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

.v7fs5fzgi {
  d: path("M15.9167 10.5L11.0797 10.5C9.3788 10.5 8 11.8431 8 13.5C8 15.1569 9.3788 16.5 11.0797 16.5L13.1063 16.5M12.8375 7.1909L16 10.5L12.8375 13.8091");
}

.x-_5ilohg {
  d: path("M3 3L21 3L21 21L3 21L3 3Z");
}
</style><g class="gp_8x1bzb"><path class="x-_5ilohg"/><path class="v7fs5fzgi"/></g>`,
		"fallback": "keyline-icons:square-arrow-u-turn-right-sharp",
	});
}

export default Component;
