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
		"content": `<style>.d85607bpn {
  fill: currentColor;
  d: path("M12 8.41L16.59 13L18 11.59l-6-6l-6 6L7.41 13zM6 18h12v-2H6z");
}
</style><path class="d85607bpn"/>`,
		"fallback": "ic:outline-keyboard-capslock",
	});
}

export default Component;
