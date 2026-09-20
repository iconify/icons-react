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
		"content": `<style>.ov7f6ybcm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.416 39.87v4.618c16.52.367 30.7-8.077 30.7-22.514c0-8.077-6.372-18.474-17.958-18.474c-13.893 0-20.273 9.169-20.273 18.474c0 13.848 16.475 16.17 19.115 6.35h-8.689V15.047H33.27c0 26.555-15.636 24.824-20.853 24.824Z");
}
</style><path class="ov7f6ybcm"/>`,
		"fallback": "arcticons:laban-key",
	});
}

export default Component;
