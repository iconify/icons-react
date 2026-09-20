import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":328};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gr07_3bcm {
  fill: var(--svg-color--343741, #343741);
  d: path("M0 122.88v171.91l122.194-140.71C85.862 134.277 44.288 122.88 0 122.88");
}

.jbcvi5biz {
  fill: var(--svg-color--00bfb3, #00bfb3);
  d: path("M148.59 170.54L23.2 314.945l-11.069 12.738h238.736C237.77 263.13 200.302 207.496 148.59 170.54");
}

.vwuoxgbdy {
  fill: var(--svg-color--f04e98, #f04e98);
  d: path("M256 0H0v294.789z");
}
</style><path class="vwuoxgbdy"/><path class="gr07_3bcm"/><path class="jbcvi5biz"/>`,
		"fallback": "logos:kibana",
	});
}

export default Component;
