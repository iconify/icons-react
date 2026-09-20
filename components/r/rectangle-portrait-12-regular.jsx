import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nza235b5m {
  fill: currentColor;
  d: path("M4 11a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zM3 9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z");
}
</style><path class="nza235b5m"/>`,
		"fallback": "fluent:rectangle-portrait-12-regular",
	});
}

export default Component;
