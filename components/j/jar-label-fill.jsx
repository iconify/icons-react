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
		"content": `<style>.c1w2zcb8b {
  fill: currentColor;
  d: path("M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M168 48h-16V32h16Zm-48 0V32h16v16Zm-16-16v16H88V32ZM80 64h96a24 24 0 0 1 24 24v8H56v-8a24 24 0 0 1 24-24m96 160H80a24 24 0 0 1-24-24v-8h144v8a24 24 0 0 1-24 24");
}
</style><path class="c1w2zcb8b"/>`,
		"fallback": "ph:jar-label-fill",
	});
}

export default Component;
