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
		"content": `<style>.nxjt6zb8e {
  fill: currentColor;
  d: path("M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m-2.75-5.5h1.5V19h2.5v-4.5h1.5v-6h-5.5z");
}

.soci7ctjl {
  cx: 12px;
  cy: 6.5px;
  r: 1.5px;
  fill: currentColor;
}
</style><path class="nxjt6zb8e"/><circle class="soci7ctjl"/>`,
		"fallback": "ic:sharp-attribution",
	});
}

export default Component;
