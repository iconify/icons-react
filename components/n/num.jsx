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
		"content": `<style>.p1mf8bbau {
  fill: var(--svg-color--0000d8, #0000d8);
  d: path("M9 4.8v8.4l6 6v-8.4zm12 0h-6v6l4.2 4.182L15 19.2h6zm-12 0H3v14.4h6v-6L4.8 9z");
}
</style><path class="p1mf8bbau"/>`,
		"fallback": "token-branded:num",
	});
}

export default Component;
