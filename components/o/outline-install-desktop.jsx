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
		"content": `<style>.nt0wtvv1n {
  fill: currentColor;
  d: path("m17 14l5-5l-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z");
}

.wmr8nablr {
  fill: currentColor;
  d: path("M20 17H4V5h8V3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-3h-2z");
}
</style><path class="wmr8nablr"/><path class="nt0wtvv1n"/>`,
		"fallback": "ic:outline-install-desktop",
	});
}

export default Component;
