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
		"content": `<style>.utv52wb3g {
  fill: currentColor;
  d: path("M7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m5.354 3.646a.5.5 0 0 1-.708.708L10.5 7.707V10.5a.5.5 0 0 1-1 0V7.707L8.354 8.854a.5.5 0 1 1-.708-.708l2-2A.5.5 0 0 1 9.997 6h.006a.5.5 0 0 1 .348.144l.003.003z");
}
</style><path class="utv52wb3g"/>`,
		"fallback": "fluent:phone-header-arrow-up-20-filled",
	});
}

export default Component;
