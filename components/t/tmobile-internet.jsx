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
		"content": `<style>.brmwvccen {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.668 33.175v-1.492c-2.556-.138-2.997-1.083-3.034-2.498v-12.98c2.344.239 4.655.175 4.655 5.056h1.213v-6.582H4.515v6.582H5.73c0-4.8 2.31-4.817 4.653-5.055v12.98c-.038 1.414-.478 2.36-3.033 2.497v1.492zm8.472-4.708v4.826h4.825s.088-4.518-4.825-4.827zm11.627 4.803s-.121-10.785-11.547-11.776m.02-6.833L43.5 33.34s-.196-17.59-18.26-18.678");
}

.lcixoo07x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.5 23.14h-3.692v3.693H19.5zm-14.999 0h3.692v3.693H4.5v-3.692z");
}
</style><path class="lcixoo07x"/><path class="brmwvccen"/>`,
		"fallback": "arcticons:tmobile-internet",
	});
}

export default Component;
