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
		"content": `<style>.ls5zy66mw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21c-3-2-7-6-7-11a7 7 0 0 1 14 0c0 5-4 9-7 11m0-12c-.75-1.5-3-1.5-3 0s3 3 3 3s3-1.5 3-3s-2.25-1.5-3 0");
}
</style><path class="ls5zy66mw"/>`,
		"fallback": "coolicons:map-pin-heart-round",
	});
}

export default Component;
