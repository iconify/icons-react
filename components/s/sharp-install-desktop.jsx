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

.swbg75bsk {
  fill: currentColor;
  d: path("M20 17H4V5h8V3H2v16h6v2h8v-2h6v-5h-2z");
}
</style><path class="swbg75bsk"/><path class="nt0wtvv1n"/>`,
		"fallback": "ic:sharp-install-desktop",
	});
}

export default Component;
