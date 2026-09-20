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
		"content": `<style>.cxp3swtej {
  fill: currentColor;
  d: path("m13.27 16.5l2.807-4.692L13.5 7.5h1.116l2.019 3.383L18.654 7.5h1.077l-2.558 4.27L20 16.5h-1.115l-2.27-3.786l-2.269 3.786zM5 16.5v-1h1v1zm3.27 0l2-8H6.307v-1h4.058q.378 0 .66.268t.282.648q0 .25-.07.43L9.309 16.5z");
}
</style><path class="cxp3swtej"/>`,
		"fallback": "material-symbols-light:speed-0-7x",
	});
}

export default Component;
