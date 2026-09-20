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
		"content": `<style>.x2uusbb3z {
  fill: currentColor;
  d: path("M10.934 13.066Q10.5 12.633 10.5 12t.434-1.066T12 10.5t1.066.434q.434.433.434 1.066t-.434 1.066T12 13.5t-1.066-.434M11.5 8V4h1v4zm0 12v-4h1v4zm4.5-7.5v-1h4v1zm-12 0v-1h4v1z");
}
</style><path class="x2uusbb3z"/>`,
		"fallback": "material-symbols-light:point-scan-outline",
	});
}

export default Component;
