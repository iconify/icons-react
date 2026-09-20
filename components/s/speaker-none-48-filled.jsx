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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.l4wscpbwt {
  d: path("M25.081 6.418C26.208 5.408 28 6.207 28 7.721v32.558c0 1.514-1.792 2.314-2.919 1.302l-8.206-7.366A4.75 4.75 0 0 0 13.702 33H9a5.25 5.25 0 0 1-5.25-5.25v-7.5C3.75 17.35 6.1 15 9 15h4.702a4.75 4.75 0 0 0 3.173-1.215l8.206-7.367z");
  fill: currentColor;
}

.m4r_etb2p {
  d: path("M32.366 18.366a1.25 1.25 0 0 1 1.768 0L38 22.232l3.866-3.866a1.25 1.25 0 0 1 1.768 1.768L39.768 24l3.866 3.866a1.25 1.25 0 0 1-1.768 1.768L38 25.768l-3.866 3.866a1.25 1.25 0 1 1-1.768-1.768L36.232 24l-3.866-3.866a1.25 1.25 0 0 1 0-1.768z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="l4wscpbwt"/><path class="m4r_etb2p"/></g>`,
		"fallback": "fluent:speaker-none-48-filled",
	});
}

export default Component;
