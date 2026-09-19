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
		"content": `<style>.h332xx0in {
  fill: currentColor;
  d: path("M5 8h14v10H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.m_gsnq25f {
  fill: currentColor;
  d: path("M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m0 14H5V8h14z");
}
</style><path class="h332xx0in"/><path class="m_gsnq25f"/>`,
		"fallback": "ic:twotone-web-asset",
	});
}

export default Component;
