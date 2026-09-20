import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pi1hjlb3b {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h5A2.5 2.5 0 0 1 12 4.5v5A2.5 2.5 0 0 1 9.5 12h-5A2.5 2.5 0 0 1 2 9.5zM4.5 3A1.5 1.5 0 0 0 3 4.5v5A1.5 1.5 0 0 0 4.5 11h5A1.5 1.5 0 0 0 11 9.5V5H6.5A1.5 1.5 0 0 1 5 3.5V3zM6 3v.5a.5.5 0 0 0 .5.5h4.415A1.5 1.5 0 0 0 9.5 3zm.499 11a2.5 2.5 0 0 1-2-1h5.5a3 3 0 0 0 3-3v-.386L13 9.5V4.502c.606.456.998 1.182.998 1.999V10a4 4 0 0 1-4 4z");
}
</style><path class="pi1hjlb3b"/>`,
		"fallback": "fluent:tab-desktop-multiple-16-regular",
	});
}

export default Component;
