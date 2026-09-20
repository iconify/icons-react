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
		"content": `<style>.chl9zlzsd {
  fill: currentColor;
  d: path("M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m.25-9A3.25 3.25 0 0 1 21 6.25v5.774A6.47 6.47 0 0 0 17.5 11a6.5 6.5 0 0 0-1.783.25H11.25a.75.75 0 0 0 0 1.5h1.815A6.48 6.48 0 0 0 11 17.5c0 1.29.377 2.49 1.024 3.5H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm-.25 11a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H20a.5.5 0 0 0 0-1h-2v-2.5a.5.5 0 0 0-.5-.5m-9.75.75a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-3.75a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-3.75a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3.5.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="chl9zlzsd"/>`,
		"fallback": "fluent:text-bullet-list-square-clock-24-filled",
	});
}

export default Component;
