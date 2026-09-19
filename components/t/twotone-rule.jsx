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
		"content": `<style>.t6lzpebcm {
  fill: currentColor;
  d: path("M16.54 11L13 7.46l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41zM11 7H2v2h9zm10 6.41L19.59 12L17 14.59L14.41 12L13 13.41L15.59 16L13 18.59L14.41 20L17 17.41L19.59 20L21 18.59L18.41 16zM11 15H2v2h9z");
}
</style><path class="t6lzpebcm"/>`,
		"fallback": "ic:twotone-rule",
	});
}

export default Component;
