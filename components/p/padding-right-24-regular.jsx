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
		"content": `<style>.vpw_69-tc {
  fill: currentColor;
  d: path("M2.75 4.5a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0v-13a.75.75 0 0 1 .75-.75m18.5 0a.75.75 0 0 1 .75.75v.867a.75.75 0 0 1-1.5 0V5.25a.75.75 0 0 1 .75-.75m0 3.467a.75.75 0 0 1 .75.75v1.733a.75.75 0 0 1-1.5 0V8.717a.75.75 0 0 1 .75-.75m0 4.333a.75.75 0 0 1 .75.75v1.733a.75.75 0 0 1-1.5 0V13.05a.75.75 0 0 1 .75-.75m0 4.333a.75.75 0 0 1 .75.75v.867a.75.75 0 0 1-1.5 0v-.867a.75.75 0 0 1 .75-.75m-2.47-4.353a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 1 0-1.06 1.06L16.44 11H5.75a.75.75 0 0 0 0 1.5h10.69l-3.72 3.72a.75.75 0 1 0 1.06 1.06z");
}
</style><path class="vpw_69-tc"/>`,
		"fallback": "fluent:padding-right-24-regular",
	});
}

export default Component;
