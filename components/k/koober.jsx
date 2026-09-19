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
		"content": `<style>.a28xsovsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.006 8.33c3.773-3.773 9.89-3.773 13.664 0s3.773 9.89 0 13.664L21.994 39.67a9.66 9.66 0 0 1-13.664 0a9.66 9.66 0 0 1 0-13.664z");
}
</style><path class="a28xsovsv"/>`,
		"fallback": "arcticons:koober",
	});
}

export default Component;
