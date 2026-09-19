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
		"content": `<style>.es0f9lbiz {
  fill: currentColor;
  d: path("M18 10.17V3h-2v7.17l-2.59-2.58L12 9l5 5l5-5l-1.41-1.41z");
}

.hc_fmdbkf {
  fill: currentColor;
  d: path("M20 17H4V5h9V3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-5.17l-2 2z");
}

.tk03i7b2p {
  fill: currentColor;
  d: path("M14.83 9L16 10.17zM4 17h16v-3.17l-3 3L9.17 9L13 5.17V5H4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="tk03i7b2p"/><path class="hc_fmdbkf"/><path class="es0f9lbiz"/>`,
		"fallback": "ic:twotone-install-desktop",
	});
}

export default Component;
