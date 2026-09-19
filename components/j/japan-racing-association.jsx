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
		"content": `<style>.ecyxx-__o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.174 26.721h10.862c1.708 0 3.311.823 4.307 2.21l7.702 10.738A21.1 21.1 0 0 1 24 41.687C13.23 41.687 4.5 33.768 4.5 24S13.23 6.315 24 6.315S43.5 14.233 43.5 24c0 1.697-.27 3.385-.8 5.013l-13.674-10.04M9 22.341l21.68-9.536");
}
</style><path class="ecyxx-__o"/>`,
		"fallback": "arcticons:japan-racing-association",
	});
}

export default Component;
