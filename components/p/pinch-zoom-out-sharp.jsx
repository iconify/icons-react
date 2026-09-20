import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jsbq1pbsi {
  fill: currentColor;
  d: path("M1.616 12V7.616H2.5v2.873l3.264-3.264l.627.627l-3.264 3.264H6V12zm6.236-5.61l-.627-.626L10.489 2.5H7.616v-.884H12V6h-.885V3.127zm5.185 15.38l-5.668-5.654l.922-.895l3.44.858v-8.81h1v7.77h1.827v-4.27h1v4.27h1.846v-3.27h1v3.27h1.827v-1.27h1v8z");
}
</style><path class="jsbq1pbsi"/>`,
		"fallback": "material-symbols-light:pinch-zoom-out-sharp",
	});
}

export default Component;
