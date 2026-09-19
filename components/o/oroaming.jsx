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
		"content": `<style>.s3ea71x3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.897 33.283v-5.076l-14.625-9.834v-10.6a3.272 3.272 0 0 0-6.544 0v10.6L6.103 28.207v5.076l14.625-5.17v8.704l-4.875 4.212V43.5h16.294v-2.47l-4.875-4.213v-8.703Z");
}
</style><path class="s3ea71x3r"/>`,
		"fallback": "arcticons:oroaming",
	});
}

export default Component;
