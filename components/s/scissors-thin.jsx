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
		"content": `<style>.zteon9bkg {
  fill: currentColor;
  d: path("M161 110.87a4 4 0 0 1 1.05-5.56L229.74 59a4 4 0 0 1 4.52 6.61l-67.67 46.3a4 4 0 0 1-5.56-1ZM235.3 196a4 4 0 0 1-5.56 1L136 132.85l-47.53 32.53a32 32 0 1 1-5.84-8c.45.45.89.92 1.31 1.4l45-30.78l-45-30.78c-.42.48-.86 1-1.31 1.4a31.86 31.86 0 1 1 5.84-8l49.69 34l96.09 65.76a4 4 0 0 1 1.05 5.62M77 93a24.4 24.4 0 0 0 2.82-3.38A24 24 0 1 0 77 93m7 87a23.75 23.75 0 0 0-4.15-13.49v-.06A24.5 24.5 0 0 0 77 163a24 24 0 1 0 0 34a23.85 23.85 0 0 0 7-17");
}
</style><path class="zteon9bkg"/>`,
		"fallback": "ph:scissors-thin",
	});
}

export default Component;
