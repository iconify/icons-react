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
		"content": `<style>.fw1c15b4d {
  fill: currentColor;
  d: path("M18 2h-7.17c-.53 0-1.04.21-1.42.59L4.59 7.41C4.21 7.79 4 8.3 4 8.83V20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6.35 14.65l-2.79-2.79c-.32-.32-.1-.86.35-.86H11v-2.99a1 1 0 0 1 .99-1a.993.993 0 0 1 1.01 1V13h1.79c.45 0 .67.54.35.85l-2.79 2.79c-.19.2-.51.2-.7.01");
}
</style><path class="fw1c15b4d"/>`,
		"fallback": "ic:round-sim-card-download",
	});
}

export default Component;
