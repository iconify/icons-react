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
		"content": `<style>.zafmmq91j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.735 22.4c-5.827-.005-10.554 4.714-10.56 10.54c-.006 5.827 4.713 10.555 10.54 10.56c5.811.005 10.532-4.69 10.56-10.5V4.5c0 5.827 4.723 10.55 10.55 10.55M12.464 4.607l-.893 4.28h2.467l-3.84 6.65l.894-4.28H8.625z");
}
</style><path class="zafmmq91j"/>`,
		"fallback": "arcticons:tiktok-lite",
	});
}

export default Component;
