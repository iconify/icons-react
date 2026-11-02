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
		"content": `<style>.k314fabee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 16v2H3V6h2m6 0h4v4m0 0l6-3v9M2 3l19 19");
}
</style><path class="k314fabee"/>`,
		"fallback": "coolicons:video-off-sharp",
	});
}

export default Component;
