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
		"content": `<style>.ij06ixbqc {
  fill: currentColor;
  d: path("M10.59 14.42c.78.79 2.05.8 2.84.01l4.98-4.98c.78-.78.78-2.05 0-2.83l-3.54-3.53c-.78-.78-2.05-.78-2.83 0L7.09 8.04a2 2 0 0 0-.01 2.82zm2.87-9.92l3.53 3.53l-4.94 4.94l-3.53-3.53z");
}

.jj6a7zb6g {
  fill: currentColor;
  d: path("m18 12.18l-1.5 1.64l2 2.18h-13l2-2.18L6 12.18l-3 3.27V20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4.54z");
}
</style><path class="jj6a7zb6g"/><path class="ij06ixbqc"/>`,
		"fallback": "ic:round-how-to-vote",
	});
}

export default Component;
