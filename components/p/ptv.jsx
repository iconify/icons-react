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
		"content": `<style>.ychfvrw6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 34.073V18.754h5.3c2.997 0 5.426 2.304 5.426 5.145s-2.429 5.144-5.426 5.144H4.5m12.396-10.56h10.746m-5.373 15.866V18.483m5.364-4.833L43.5 19.023l-15.867 5.373");
}
</style><path class="ychfvrw6t"/>`,
		"fallback": "arcticons:ptv",
	});
}

export default Component;
