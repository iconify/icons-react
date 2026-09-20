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
		"content": `<style>.tursadckb {
  fill: currentColor;
  d: path("M232 48H24A16 16 0 0 0 8 64v128a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M128 152a8 8 0 0 1-16 0v-28.69l-18.34 18.35a8 8 0 0 1-11.32 0L64 123.31V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 13.66-5.66L88 124.69l26.34-26.35A8 8 0 0 1 128 104Zm77.66-18.34l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L168 132.69V104a8 8 0 0 1 16 0v28.69l10.34-10.35a8 8 0 0 1 11.32 11.32");
}
</style><path class="tursadckb"/>`,
		"fallback": "ph:markdown-logo-fill",
	});
}

export default Component;
