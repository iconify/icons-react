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
		"content": `<style>.l6y8p5ble {
  fill: currentColor;
  d: path("M5 8h10v8H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.zabeedcrj {
  fill: currentColor;
  d: path("M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zm-2 9H5V8h10z");
}
</style><path class="l6y8p5ble"/><path class="zabeedcrj"/>`,
		"fallback": "ic:twotone-videocam",
	});
}

export default Component;
