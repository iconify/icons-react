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
		"content": `<style>.a25cjh73b {
  fill: currentColor;
  d: path("M12 3L2 21h20zm1 5.92L18.6 19H13zm-2 0V19H5.4z");
}

.hbsc8jbhq {
  fill: currentColor;
  d: path("M13 8.92L18.6 19H13zm-2 0V19H5.4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="hbsc8jbhq"/><path class="a25cjh73b"/>`,
		"fallback": "ic:twotone-details",
	});
}

export default Component;
