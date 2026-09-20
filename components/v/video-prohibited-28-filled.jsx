import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lugg5qblw {
  fill: currentColor;
  d: path("M7.5 13a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13M4.534 23.526a5 5 0 0 0 6.992-6.992zM7.5 14.5a5 5 0 0 0-4.026 7.966l6.992-6.992A4.98 4.98 0 0 0 7.5 14.5M14.25 6A3.75 3.75 0 0 1 18 9.75v8.5a3.75 3.75 0 0 1-3.424 3.734A7.5 7.5 0 0 0 2 14.402V9.75A3.75 3.75 0 0 1 5.75 6zm9.002 1.313c1.16-.801 2.744.03 2.744 1.44v10.49c0 1.41-1.583 2.24-2.744 1.44L19 17.747V10.25z");
}
</style><path class="lugg5qblw"/>`,
		"fallback": "fluent:video-prohibited-28-filled",
	});
}

export default Component;
