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
		"content": `<style>.spw8qqbme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 20L4.6 4.6M4 10L4 4.5C4 4.2239 4.2239 4 4.5 4L10 4");
}
</style><path class="spw8qqbme"/>`,
		"fallback": "keyline-icons:move-up-left-two-tone",
	});
}

export default Component;
