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
		"content": `<style>.ketz17bqs {
  fill: currentColor;
  d: path("m7 17.97l5-2.15l5 2.15V5H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.szsxebcbu {
  fill: currentColor;
  d: path("M17 3H7c-1.1 0-2 .9-2 2v16l7-3l7 3V5c0-1.1-.9-2-2-2m0 14.97l-5-2.14l-5 2.14V5h10z");
}
</style><path class="ketz17bqs"/><path class="szsxebcbu"/>`,
		"fallback": "ic:twotone-bookmark",
	});
}

export default Component;
