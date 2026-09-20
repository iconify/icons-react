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
		"content": `<style>.bkzblrbqn {
  fill: currentColor;
  d: path("M11.423 21v-5.384h4.385v3.461h-3.5V21zm6.077 0v-5.384h.885v2H21v-2h.885V21H21v-2.5h-2.616V21zm-5.192-2.808h2.615V16.54h-2.615zM9.423 20.97q-2.78-.215-4.602-2.23Q3 16.723 3 13.8q0-2.154 1.738-4.765T10 3.308q3.429 3.04 5.166 5.583T17 13.57v.046H9.423z");
}
</style><path class="bkzblrbqn"/>`,
		"fallback": "material-symbols-light:water-ph-sharp",
	});
}

export default Component;
