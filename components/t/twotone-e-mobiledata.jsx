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
		"content": `<style>.xub-6lbnc {
  fill: currentColor;
  d: path("M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9z");
}
</style><path class="xub-6lbnc"/>`,
		"fallback": "ic:twotone-e-mobiledata",
	});
}

export default Component;
