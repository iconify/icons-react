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
		"content": `<style>.mvjrl-b0r {
  fill: currentColor;
  d: path("M24 4a9 9 0 0 1 9 9v5.006a6.25 6.25 0 0 1 6 6.244v13.5A6.25 6.25 0 0 1 32.75 44h-17.5A6.25 6.25 0 0 1 9 37.75v-13.5a6.25 6.25 0 0 1 6-6.244V13a9 9 0 0 1 9-9m0 24.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m0-22a6.5 6.5 0 0 0-6.5 6.5v5h13v-5A6.5 6.5 0 0 0 24 6.5");
}
</style><path class="mvjrl-b0r"/>`,
		"fallback": "fluent:lock-closed-48-filled",
	});
}

export default Component;
