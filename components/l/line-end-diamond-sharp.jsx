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
		"content": `<style>.smfebfddh {
  fill: currentColor;
  d: path("m15 16.77l-4.27-4.27H3.078v-1h7.654L15 7.23L19.77 12z");
}
</style><path class="smfebfddh"/>`,
		"fallback": "material-symbols-light:line-end-diamond-sharp",
	});
}

export default Component;
