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
		"content": `<style>.zy04gb-1b {
  fill: currentColor;
  d: path("m5.056 21.825l-.829-.561q1.24-2.239 1.417-4.514T5.821 12q0-2.45-.177-4.734q-.177-2.285-1.417-4.504l.829-.562q.382.702.654 1.397q.273.695.473 1.403H8.23q1.4.006 2.373 1.024t.973 2.482v7.019q0 1.458-.973 2.47q-.973 1.01-2.373 1.01H6.183q-.2.709-.463 1.413t-.664 1.407m12.598-6.536L14.48 12l3.173-3.27l.708.714l-1.96 2.056H21v1h-4.598l1.96 2.08z");
}
</style><path class="zy04gb-1b"/>`,
		"fallback": "material-symbols-light:watch-button",
	});
}

export default Component;
