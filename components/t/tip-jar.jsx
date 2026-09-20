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
		"content": `<style>.yjux0ibjb {
  fill: currentColor;
  d: path("M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M168 48h-16V32h16Zm-48 0V32h16v16Zm-16-16v16H88V32Zm96 168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V88a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24Zm-40-40a24 24 0 0 1-24 24v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h24a8 8 0 0 0 0-16h-16a24 24 0 0 1 0-48v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 0 16h-24a8 8 0 0 0 0 16h16a24 24 0 0 1 24 24");
}
</style><path class="yjux0ibjb"/>`,
		"fallback": "ph:tip-jar",
	});
}

export default Component;
