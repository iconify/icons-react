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
		"content": `<style>.yex4rfg8m {
  fill: currentColor;
  d: path("M9.5 18.125V13h5v5.125zm0-7V6h5v5.125zm-7.5 0V4l5.5 1.575v5.55zM2 20v-7h5.5v5.55zm20 0l-5.5-1.45V13H22zm-5.5-8.875V5.6L22 4.125v7z");
}
</style><path class="yex4rfg8m"/>`,
		"fallback": "material-symbols:spatial-gallery-sharp",
	});
}

export default Component;
