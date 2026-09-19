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
		"content": `<style>.pzqwvaclh {
  fill: currentColor;
  d: path("M8 17h8v1H8zM8 2h8v1H8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.r96t7n8if {
  fill: currentColor;
  d: path("M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99M16 18H8v-1h8zm0-3H8V5h8zm0-12H8V2h8z");
}
</style><path class="pzqwvaclh"/><path class="r96t7n8if"/>`,
		"fallback": "ic:twotone-settings-cell",
	});
}

export default Component;
