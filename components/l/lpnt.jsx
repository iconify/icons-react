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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.vbquwab2j {
  fill: var(--svg-color--e82f59, #e82f59);
  fill-rule: evenodd;
  d: path("M8.7 6.6H3V21h14.4v-5.7zm7.5 13.2v-2.4H6.6V7.8H4.2v12z");
}

.xznn5_baa {
  fill: var(--svg-color--141b30, #141b30);
  d: path("M5.4 3H21v15.6l-3.6-3.3V6.6H8.7z");
}
</style><g class="ft5dv1b6b"><path class="xznn5_baa"/><path clip-rule="evenodd" class="vbquwab2j"/></g>`,
		"fallback": "token-branded:lpnt",
	});
}

export default Component;
