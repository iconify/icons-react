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
		"content": `<style>.h1d6t1hnd {
  fill: var(--svg-color--cf2437, #cf2437);
  d: path("m10.167 3l-5.642 9.845a2.73 2.73 0 0 0-.36 1.474c.03 1.317.882 2.618 2.333 2.618h9.857V21h3.482v-5.224a2.32 2.32 0 0 0-2.321-2.322H8.153L14.19 3.006h-4.023z");
}
</style><path class="h1d6t1hnd"/>`,
		"fallback": "token-branded:mars4",
	});
}

export default Component;
