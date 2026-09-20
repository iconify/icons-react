import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s0_5bkitk {
  fill: currentColor;
  d: path("M15 3H7.5A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29H15zm2 26h7.5a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3H17z");
}
</style><path class="s0_5bkitk"/>`,
		"fallback": "fluent:layout-column-two-32-filled",
	});
}

export default Component;
