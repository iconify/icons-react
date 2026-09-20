import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z-unscfsl {
  fill: currentColor;
  d: path("M2 6a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 10a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 9a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2z");
}
</style><path class="z-unscfsl"/>`,
		"fallback": "fluent:line-horizontal-3-32-regular",
	});
}

export default Component;
