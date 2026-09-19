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
		"content": `<style>.m_nrw8bmo {
  fill: currentColor;
  d: path("M8.33 17H5V7h3.33zm5.34 0h-3.33V7h3.33zM19 17h-3.33V7H19z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.no8cyefhu {
  fill: currentColor;
  d: path("M3 5v14h18V5zm5.33 12H5V7h3.33zm5.34 0h-3.33V7h3.33zM19 17h-3.33V7H19z");
}
</style><path class="m_nrw8bmo"/><path class="no8cyefhu"/>`,
		"fallback": "ic:twotone-view-column",
	});
}

export default Component;
