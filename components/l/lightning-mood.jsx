import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wlk5en25j {
  fill: var(--svg-color--fbb11c, #fbb11c);
  d: path("M43.4.159L12.06 28.492l24.31 7.538L18.12 64l35.26-33.426l-18.978-8.464z");
}
</style><path class="wlk5en25j"/>`,
		"fallback": "emojione-v1:lightning-mood",
	});
}

export default Component;
