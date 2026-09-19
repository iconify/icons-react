import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d7j8n0l4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.622 33.012l-8.874-5.123v10.246z");
}

.elpky9bnq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.73 22.4c-5.827-.005-10.554 4.714-10.56 10.54c-.005 5.827 4.714 10.555 10.54 10.56c5.811.005 10.532-4.69 10.56-10.5V4.5c0 5.827 4.723 10.55 10.55 10.55");
}
</style><path class="elpky9bnq"/><path class="d7j8n0l4z"/>`,
		"fallback": "arcticons:ticktock-video-wallpaper",
	});
}

export default Component;
