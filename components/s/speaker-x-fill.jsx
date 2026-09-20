import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q9g35zb8k {
  fill: currentColor;
  d: path("M245.66 146.34a8 8 0 0 1-11.32 11.32L216 139.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L204.69 128l-18.35-18.34a8 8 0 0 1 11.32-11.32L216 116.69l18.34-18.35a8 8 0 0 1 11.32 11.32L227.31 128ZM60 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h28a4 4 0 0 0 4-4V84a4 4 0 0 0-4-4m97.15-54.15a8 8 0 0 0-10-.16l-65.57 51A4 4 0 0 0 80 79.84v96.32a4 4 0 0 0 1.55 3.15l65.57 51a8 8 0 0 0 9 .56a8.29 8.29 0 0 0 3.91-7.18V32.25a8.27 8.27 0 0 0-2.91-6.4Z");
}
</style><path class="q9g35zb8k"/>`,
		"fallback": "ph:speaker-x-fill",
	});
}

export default Component;
