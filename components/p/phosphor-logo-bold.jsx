import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dhpguebfm {
  fill: currentColor;
  d: path("M228 104a76.08 76.08 0 0 0-76-76H72a12 12 0 0 0-12 12v128a84.09 84.09 0 0 0 84 84a12 12 0 0 0 12-12v-60.11A76.09 76.09 0 0 0 228 104M84 85.81L123.48 156H84Zm48 36.38L92.52 52H132ZM85.22 180H132v46.79A60.18 60.18 0 0 1 85.22 180M156 155.83V52.17a52 52 0 0 1 0 103.66");
}
</style><path class="dhpguebfm"/>`,
		"fallback": "ph:phosphor-logo-bold",
	});
}

export default Component;
