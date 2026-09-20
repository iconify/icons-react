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
		"content": `<style>.uad_rwajt {
  fill: currentColor;
  d: path("M16.496 10h-2.504a6.25 6.25 0 0 1 6.245-6h14.5a9.25 9.25 0 0 1 9.25 9.25v14.5a6.25 6.25 0 0 1-5.989 6.245V31.49a3.75 3.75 0 0 0 3.49-3.741v-14.5a6.75 6.75 0 0 0-6.75-6.75h-14.5a3.75 3.75 0 0 0-3.742 3.5M4 18.25A6.25 6.25 0 0 1 10.25 12h19.5A6.25 6.25 0 0 1 36 18.25v19.5A6.25 6.25 0 0 1 29.75 44h-19.5A6.25 6.25 0 0 1 4 37.75z");
}
</style><path class="uad_rwajt"/>`,
		"fallback": "fluent:square-multiple-48-filled",
	});
}

export default Component;
