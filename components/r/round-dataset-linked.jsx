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
		"content": `<style>.h6j33yb-z {
  fill: currentColor;
  d: path("M8.09 17H7v-4h3.69c.95-.63 2.09-1 3.31-1h6c.34 0 .67.04 1 .09V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h3.81C8.3 20.12 8 19.09 8 18c0-.34.04-.67.09-1M13 7h4v4h-4zM7 7h4v4H7z");
}

.kysnvh2yf {
  fill: currentColor;
  d: path("M15 19h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1");
}

.oj9szrmjr {
  fill: currentColor;
  d: path("M12.03 17.66c.16-.98 1.09-1.66 2.08-1.66H15c.55 0 1-.45 1-1s-.45-1-1-1h-.83c-2.09 0-3.95 1.53-4.15 3.61A4 4 0 0 0 14 22h1c.55 0 1-.45 1-1s-.45-1-1-1h-1c-1.21 0-2.18-1.09-1.97-2.34m7.8-3.66H19c-.55 0-1 .45-1 1s.45 1 1 1h.89c1 0 1.92.68 2.08 1.66c.21 1.25-.76 2.34-1.97 2.34h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c2.34 0 4.21-2.01 3.98-4.39c-.2-2.08-2.06-3.61-4.15-3.61");
}
</style><path class="h6j33yb-z"/><path class="oj9szrmjr"/><path class="kysnvh2yf"/>`,
		"fallback": "ic:round-dataset-linked",
	});
}

export default Component;
