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
		"content": `<style>.kmg47kgdw {
  fill: currentColor;
  d: path("M200 24H72a16 16 0 0 0-16 16v24H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h16v24a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M68.24 153.94l-12-48a8 8 0 1 1 15.52-3.88l6.76 27l6.32-12.66a8 8 0 0 1 14.32 0l6.32 12.66l6.76-27a8 8 0 0 1 15.52 3.88l-12 48a8 8 0 0 1-6.89 6a9 9 0 0 1-.87.05a8 8 0 0 1-7.16-4.42L92 137.89l-8.84 17.69a8 8 0 0 1-14.92-1.64M200 216H72v-24h72a16 16 0 0 0 16-16v-8h40Zm0-64h-40v-48h40Zm0-64h-40v-8a16 16 0 0 0-16-16H72V40h128Z");
}
</style><path class="kmg47kgdw"/>`,
		"fallback": "ph:microsoft-word-logo-fill",
	});
}

export default Component;
