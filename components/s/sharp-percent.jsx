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
		"content": `<style>.c6s6f1b9r {
  fill: currentColor;
  d: path("M7.5 4C5.57 4 4 5.57 4 7.5S5.57 11 7.5 11S11 9.43 11 7.5S9.43 4 7.5 4m0 5C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6S9 6.67 9 7.5S8.33 9 7.5 9m9 4c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5.41 20L4 18.59L18.59 4L20 5.41z");
}
</style><path class="c6s6f1b9r"/>`,
		"fallback": "ic:sharp-percent",
	});
}

export default Component;
