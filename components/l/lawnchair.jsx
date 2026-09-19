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
		"content": `<style>.p6slpmuqh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.37 42.21a2.6 2.6 0 0 1-.67.11a2.17 2.17 0 0 1-2.16-2.19a2.13 2.13 0 0 1 .62-1.51l14.7-14.71l3 3l-8.16 8.2l12.32-4l3.42 3.43Zm33.05-.77a2.15 2.15 0 0 1-3 0h0L6.41 9.43a2.16 2.16 0 0 1 3.05-3.06h0l32 31.94a2.15 2.15 0 0 1 0 3v.08Zm-.51-10.12L36 32.93l-3.42-3.42l7-2.3a2.16 2.16 0 0 1 1.54 4Z");
}
</style><path class="p6slpmuqh"/>`,
		"fallback": "arcticons:lawnchair",
	});
}

export default Component;
