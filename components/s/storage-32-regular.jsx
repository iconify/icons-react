import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kl98bra1x {
  fill: currentColor;
  d: path("M2 13.5A4.5 4.5 0 0 1 6.5 9h19a4.5 4.5 0 0 1 4.5 4.5v5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 18.5zM6.5 11A2.5 2.5 0 0 0 4 13.5v5A2.5 2.5 0 0 0 6.5 21h19a2.5 2.5 0 0 0 2.5-2.5v-5a2.5 2.5 0 0 0-2.5-2.5zM21 14.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m3.5 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3");
}
</style><path class="kl98bra1x"/>`,
		"fallback": "fluent:storage-32-regular",
	});
}

export default Component;
