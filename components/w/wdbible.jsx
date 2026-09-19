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
		"content": `<style>.z8hkm7bfq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 17.9c-5.44 7.36-12.9 14.71-22.09 14.71c-6.53 0-12.24-4.11-16.91-8.61c4.67-4.5 10.38-8.61 16.91-8.61c9.19 0 16.65 7.35 22.09 14.71");
}
</style><path class="z8hkm7bfq"/>`,
		"fallback": "arcticons:wdbible",
	});
}

export default Component;
