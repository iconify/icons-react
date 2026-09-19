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
		"content": `<style>.ig6bo0f4q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.154 43.5V14.991L22.408 43.5l14.255-28.509V43.5M33.3 9.663L34.684 4.5l5.164 1.383l-1.384 5.164z");
}
</style><path class="ig6bo0f4q"/>`,
		"fallback": "arcticons:mercari",
	});
}

export default Component;
