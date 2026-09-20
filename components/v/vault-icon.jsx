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
		"content": `<style>.j-jropbsi {
  fill: var(--svg-color--ffd814, #ffd814);
  d: path("m0 0l127.56 256L256 0zm142.698 51.384h14.859v14.859h-14.859zm-29.557 59.354H98.323V95.92h14.818zm0-22.267H98.323V73.692h14.818zm0-22.228H98.323V51.384h14.818zm22.428 66.763h-14.818v-14.858h14.818zm0-22.268h-14.818V95.92h14.818zm0-22.267h-14.818V73.692h14.818zm0-22.228h-14.818V51.384h14.818zm7.13 7.45h14.858V88.51h-14.859zm0 37.085V95.96h14.858v14.818z");
}
</style><path class="j-jropbsi"/>`,
		"fallback": "logos:vault-icon",
	});
}

export default Component;
