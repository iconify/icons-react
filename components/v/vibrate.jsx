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
		"content": `<style>.qxnq9jsbn {
  fill: currentColor;
  d: path("M160 32H96a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h64a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24m8 168a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Zm48-112v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0m32 16v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0M56 88v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0m-32 16v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0");
}
</style><path class="qxnq9jsbn"/>`,
		"fallback": "ph:vibrate",
	});
}

export default Component;
