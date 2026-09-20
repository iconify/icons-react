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
		"content": `<style>.marp6wbzr {
  fill: currentColor;
  d: path("M16 20q-1.25 0-2.125-.875T13 17t.875-2.125T16 14q.275 0 .525.038T17 14.2V6h5v2h-3v9q0 1.25-.875 2.125T16 20M3 16v-2h8v2zm0-4v-2h12v2zm0-4V6h12v2z");
}
</style><path class="marp6wbzr"/>`,
		"fallback": "material-symbols:queue-music",
	});
}

export default Component;
