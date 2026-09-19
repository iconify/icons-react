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
		"content": `<style>.p6r9jxb-h {
  fill: currentColor;
  d: path("M2 6.67V22h20V6H8.3l8.26-3.34L15.88 1zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m13-8h-2v-2h-2v2H4V8h16z");
}
</style><path class="p6r9jxb-h"/>`,
		"fallback": "ic:sharp-radio",
	});
}

export default Component;
