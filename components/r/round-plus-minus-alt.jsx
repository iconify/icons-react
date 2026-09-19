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
		"content": `<style>.nrh1exbqa {
  fill: currentColor;
  d: path("M11 7.998H8v3a1 1 0 0 1-2 0v-3H3a1 1 0 1 1 0-2h3v-3a1 1 0 1 1 2 0v3h3a1 1 0 0 1 0 2m10 10h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2M17.793 4.707L4.707 17.793a1 1 0 0 0 0 1.414l.086.086a1 1 0 0 0 1.414 0L19.293 6.207a1 1 0 0 0 0-1.414l-.086-.086a1 1 0 0 0-1.414 0");
}
</style><path class="nrh1exbqa"/>`,
		"fallback": "ic:round-plus-minus-alt",
	});
}

export default Component;
