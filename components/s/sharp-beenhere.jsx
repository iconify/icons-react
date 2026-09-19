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
		"content": `<style>.jhey4ubjv {
  fill: currentColor;
  d: path("M3.01 1L3 17l9 6l8.99-6L21 1zM10 16l-5-5l1.41-1.42L10 13.17l7.59-7.59L19 7z");
}
</style><path class="jhey4ubjv"/>`,
		"fallback": "ic:sharp-beenhere",
	});
}

export default Component;
