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
		"content": `<style>.ud2s2km0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6H10M7 3L10 6L7 9M21 6H14M17 3L14 6L17 9M6 13V21M12 13V21M18 13V21");
}
</style><path class="ud2s2km0m"/>`,
		"fallback": "keyline-icons:list-collapse-horizontal-two-tone",
	});
}

export default Component;
