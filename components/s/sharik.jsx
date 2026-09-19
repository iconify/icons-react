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
		"content": `<style>.mp61lukuh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.56 33.25A18 18 0 0 1 33.27 8.57c-5.4 16.04-5.99 18.08-24.71 24.68m32.62-14.63c4.22 15.2-9.77 26.76-22.57 22.56C27 27.67 30 25.92 41.18 18.62");
}
</style><path class="mp61lukuh"/>`,
		"fallback": "arcticons:sharik",
	});
}

export default Component;
