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
		"content": `<style>.drr1cc5qz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.84 18.97v10.163m6.056-18.601v26.815M24.006 3.5v41m6.101-30.944v21.01m6.053-12.669v4.144");
}
</style><path class="drr1cc5qz"/>`,
		"fallback": "arcticons:razer-audio",
	});
}

export default Component;
