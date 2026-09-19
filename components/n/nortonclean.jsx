import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fmgv6bcyy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.74 29.66A6.71 6.71 0 0 0 29.05 23h-1.56V8.11a3.57 3.57 0 0 0-2.75-3.53A3.5 3.5 0 0 0 20.51 8v15H19a6.71 6.71 0 0 0-6.69 6.69L8.74 40.9a2 2 0 0 0 1.91 2.6h26.7a2 2 0 0 0 1.91-2.6Zm-23.48 0h23.48M24 39.59v-9.93m6.15 0l1.82 9.93m-14.12-9.93l-1.82 9.93");
}
</style><path class="fmgv6bcyy"/>`,
		"fallback": "arcticons:nortonclean",
	});
}

export default Component;
