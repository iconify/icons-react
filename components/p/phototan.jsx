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
		"content": `<style>.kkyuwsbgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.17 38.39h4.11v4.11h-4.11Zm-16.45 0h4.11v4.11h-4.11Zm8.22-8.22h4.12v4.11h-4.12Zm-8.22 0h4.11v4.11h-4.11Zm16.45-8.23h4.11v4.12h-4.11Zm-16.45 0h4.11v4.12h-4.11Zm-8.22 0h4.11v4.12H5.5Zm32.89 0h4.11v4.12h-4.11Zm0-8.22h4.11v4.11h-4.11Zm-16.45 0h4.12v4.11h-4.12Zm8.23-8.22h4.11v4.11h-4.11Zm-8.23 0h4.12v4.11h-4.12Zm-8.22 0h4.11v4.11h-4.11Zm-8.22 0h4.11v4.11H5.5Z");
}
</style><path class="kkyuwsbgg"/>`,
		"fallback": "arcticons:phototan",
	});
}

export default Component;
