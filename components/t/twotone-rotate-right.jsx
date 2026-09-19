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
		"content": `<style>.v4qq944ov {
  fill: currentColor;
  d: path("M19.93 11a7.9 7.9 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47zM11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zm4.46 15.87c-.75.54-1.59.89-2.46 1.03v2.02c1.39-.17 2.74-.71 3.9-1.61zm2.85.02c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z");
}
</style><path class="v4qq944ov"/>`,
		"fallback": "ic:twotone-rotate-right",
	});
}

export default Component;
