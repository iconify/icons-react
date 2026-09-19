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
		"content": `<style>.d_wwr2byn {
  fill: currentColor;
  d: path("m16.13 15.13l1.69-10.98c.1-.6-.37-1.15-.99-1.15H14c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87M5 9V5h1.31l.62 4zm7 10c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m2.29-5H9.72L8.33 5h7.34z");
}
</style><path class="d_wwr2byn"/>`,
		"fallback": "ic:round-blender",
	});
}

export default Component;
