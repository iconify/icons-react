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
		"content": `<style>.tletp5bcr {
  fill: currentColor;
  d: path("M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-1.19.22-2.32.6-3.38l1.88.68C4.17 10.14 4 11.05 4 12c0 4.41 3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8c-.95 0-1.85.17-2.69.48l-.68-1.89C9.69 2.22 10.82 2 12 2c5.52 0 10 4.48 10 10M5.5 4C4.67 4 4 4.67 4 5.5S4.67 7 5.5 7S7 6.33 7 5.5S6.33 4 5.5 4M11 16V8H9v8zm4 0V8h-2v8z");
}
</style><path class="tletp5bcr"/>`,
		"fallback": "ic:outline-motion-photos-paused",
	});
}

export default Component;
