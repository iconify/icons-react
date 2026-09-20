import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ypbfovsxb {
  fill: currentColor;
  d: path("M9.5 7v3h-3V7zm0 7v-3h-3v3zm4-7v3h-3V7zm0 7v-3h-3v3zM7 4V2.5A1.5 1.5 0 0 1 8.5 1h3A1.5 1.5 0 0 1 13 2.5V4h4.5a.5.5 0 0 1 .5.5v10a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-10a.5.5 0 0 1 .5-.5zm1-1.5V4h4V2.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5m-5 12A1.5 1.5 0 0 0 4.5 16h11a1.5 1.5 0 0 0 1.5-1.5V5H3z");
}
</style><path class="ypbfovsxb"/>`,
		"fallback": "fluent:store-microsoft-20-regular",
	});
}

export default Component;
