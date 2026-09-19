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
		"content": `<style>.fotap_nvi {
  fill: currentColor;
  d: path("M10 17c0 1.1.9 2 2 2s2-.9 2-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.o0-jxacvd {
  fill: currentColor;
  d: path("M13 6.06V3h-2v3.06c-4.5.5-8 4.31-8 8.93C3 16.1 3.9 17 5.01 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h2.99c1.11 0 2.01-.9 2.01-2.01c0-4.62-3.5-8.43-8-8.93M12 19c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2m0-4H5c0-3.86 3.14-7 7-7s7 3.14 7 7z");
}
</style><path class="fotap_nvi"/><path class="o0-jxacvd"/>`,
		"fallback": "ic:twotone-light",
	});
}

export default Component;
