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
		"content": `<style>.jttzeie3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.05 40.3l2.3-13.3M12.25 8.8l5.6 12.7m17-13.1L30.35 27L19.75 7.8l-7.5 1l-6.8 29.1M42.35 10l-6.7 29l-7.6 1.3l-10.2-18.8l-4.9 18a3.84 3.84 0 0 1-4.5 2.8a3.9 3.9 0 0 1-3-4.4m29.4-29.5a3.84 3.84 0 0 1 4.5-2.8a3.9 3.9 0 0 1 3 4.4");
}
</style><path class="jttzeie3y"/>`,
		"fallback": "arcticons:nonocross",
	});
}

export default Component;
