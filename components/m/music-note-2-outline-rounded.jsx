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
		"content": `<style>.cp_0x9b_z {
  fill: currentColor;
  d: path("M3.877 18.93Q3 18.055 3 16.809q0-1.247.877-2.124q.877-.876 2.123-.876q.575 0 1.091.204q.517.205.909.615V6.869q0-.298.19-.528q.189-.23.481-.28l9.443-1.688q.373-.056.658.174t.286.609v9.652q0 1.246-.877 2.123t-2.123.877t-2.123-.877t-.877-2.123t.877-2.123t2.123-.877q.575 0 1.091.205q.517.204.909.614V8.098L9 9.808v7q0 1.246-.877 2.123T6 19.808t-2.123-.877");
}
</style><path class="cp_0x9b_z"/>`,
		"fallback": "material-symbols-light:music-note-2-outline-rounded",
	});
}

export default Component;
