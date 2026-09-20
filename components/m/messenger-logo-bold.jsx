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
		"content": `<style>.dd4rueb0q {
  fill: currentColor;
  d: path("m184.49 120.49l-32 32a12 12 0 0 1-17 0L112 129l-23.51 23.49a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0L144 127l23.51-23.52a12 12 0 0 1 17 17ZM236 128a108 108 0 0 1-157.23 96.15L46.34 235A20 20 0 0 1 21 209.66l10.81-32.43A108 108 0 1 1 236 128m-24 0a84 84 0 1 0-156.73 42.05a12 12 0 0 1 1 9.82l-9.93 29.79l29.79-9.93a12.1 12.1 0 0 1 3.8-.62a12 12 0 0 1 6 1.62A84 84 0 0 0 212 128");
}
</style><path class="dd4rueb0q"/>`,
		"fallback": "ph:messenger-logo-bold",
	});
}

export default Component;
