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
		"content": `<style>.cziy3p7lq {
  fill: currentColor;
  d: path("M14 2H4v20h16V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z");
}
</style><path class="cziy3p7lq"/>`,
		"fallback": "ic:sharp-description",
	});
}

export default Component;
