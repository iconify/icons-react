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
		"content": `<style>.wmoih8eht {
  fill: currentColor;
  d: path("M7 9v6h4l5 5V4l-5 5zm7-.17v6.34L11.83 13H9v-2h2.83z");
}

.xnksk_30m {
  fill: currentColor;
  d: path("M9 13h2.83L14 15.17V8.83L11.83 11H9z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="xnksk_30m"/><path class="wmoih8eht"/>`,
		"fallback": "ic:twotone-volume-mute",
	});
}

export default Component;
