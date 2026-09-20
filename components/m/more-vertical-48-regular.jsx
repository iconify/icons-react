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
		"content": `<style>.um8r-mbfp {
  fill: currentColor;
  d: path("M24.002 15.75a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5m0 11.5a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5m-3.25 8.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 0 0-6.5 0");
}
</style><path class="um8r-mbfp"/>`,
		"fallback": "fluent:more-vertical-48-regular",
	});
}

export default Component;
