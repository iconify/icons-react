import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tt4-86b_f {
  fill: currentColor;
  d: path("M15.5 10a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-4a1.5 1.5 0 0 1 1.5-1.5h.5v-.5a1.5 1.5 0 0 1 1.5-1.5zm-2 1a.5.5 0 0 0-.5.5v.5h3v-.5a.5.5 0 0 0-.5-.5zm-2.458.042a2.5 2.5 0 0 0-1.54.958H4.009C3.448 12 3 12.447 3 13c0 1.309.623 2.283 1.673 2.953c1.003.64 2.403 1 4.004 1.043L9 17v.5q0 .256.05.499L9 18c-1.855 0-3.583-.386-4.865-1.203C2.833 15.967 2 14.69 2 13c0-1.113.903-2 2.009-2h7.043zM9 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 1a3 3 0 1 0 0 6a3 3 0 0 0 0-6");
}
</style><path class="tt4-86b_f"/>`,
		"fallback": "fluent:person-briefcase-20-regular",
	});
}

export default Component;
