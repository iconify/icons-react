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
		"content": `<style>.ql5avdbfn {
  fill: currentColor;
  d: path("M20.18 15.4L19.1 23h-9L5 17.62l1.22-1.23l3.78.85V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h1.38zM12 2.5c4.74 0 7.67 2.52 8.43 4.5H22c-.73-2.88-4.51-6-10-6c-3.22 0-6.18 1.13-8.5 3.02V2H2v5h5V5.5H4.09c2.12-1.86 4.88-3 7.91-3");
}
</style><path class="ql5avdbfn"/>`,
		"fallback": "ic:sharp-swipe-left",
	});
}

export default Component;
