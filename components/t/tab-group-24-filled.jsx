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
		"content": `<style>.o2paijbih {
  fill: currentColor;
  d: path("M4.75 5A2.75 2.75 0 0 0 2 7.75v5.5A2.75 2.75 0 0 0 4.75 16h12.5A2.75 2.75 0 0 0 20 13.25v-5.5A2.75 2.75 0 0 0 17.25 5zm1.75 5.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m.747 8a2.75 2.75 0 0 1-2.45-1.5H17.25A3.75 3.75 0 0 0 21 13.25V7.8a2.75 2.75 0 0 1 1.497 2.45v3a5.25 5.25 0 0 1-5.25 5.25z");
}
</style><path class="o2paijbih"/>`,
		"fallback": "fluent:tab-group-24-filled",
	});
}

export default Component;
