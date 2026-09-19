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
		"content": `<style>.saedzwcuy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v9.17h2.83a.5.5 0 0 1-.44-.74l2.67-5c.24-.45.94-.28.94.24v3.5h1.17c.38 0 .62.4.44.74l-.67 1.26H17V5.33C17 4.6 16.4 4 15.67 4");
}

.wdec4xb5v {
  fill: currentColor;
  d: path("M11.94 18.24c-.24.45-.94.28-.94-.24v-3.5H7v6.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V14.5h-3.07z");
}
</style><path class="saedzwcuy"/><path class="wdec4xb5v"/>`,
		"fallback": "ic:round-battery-charging-30",
	});
}

export default Component;
