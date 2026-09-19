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
		"content": `<style>.ln9wfbmoi {
  fill: currentColor;
  d: path("M12 8.6L9.07 13h5.86z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.psdx19bvf {
  fill: currentColor;
  d: path("M5 17h14v2H5zm7-12L5.33 15h13.34zm0 3.6l2.93 4.4H9.07z");
}
</style><path class="ln9wfbmoi"/><path class="psdx19bvf"/>`,
		"fallback": "ic:twotone-eject",
	});
}

export default Component;
