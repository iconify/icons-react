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
		"content": `<style>.aqh1p5szd {
  fill: currentColor;
  d: path("M2.75 3A1.75 1.75 0 0 0 1 4.75v6.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 15 11.25v-6.5A1.75 1.75 0 0 0 13.25 3zm5.604 2.146l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0");
}
</style><path class="aqh1p5szd"/>`,
		"fallback": "fluent:share-screen-start-16-filled",
	});
}

export default Component;
