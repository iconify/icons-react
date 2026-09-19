import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t7pksubfi {
  fill: currentColor;
  d: path("M55.438 5H8.563C4.938 5 2 7.918 2 11.517V41.31c0 3.598 2.938 6.518 6.563 6.518h6.918V59l10.39-11.172h29.567c3.626 0 6.563-2.92 6.563-6.518V11.517C62 7.918 59.063 5 55.438 5M15.987 30.604c-2.331 0-4.219-1.875-4.219-4.19c0-2.314 1.888-4.189 4.219-4.189s4.219 1.875 4.219 4.189s-1.888 4.19-4.219 4.19m16.013 0c-2.329 0-4.219-1.875-4.219-4.19c0-2.314 1.89-4.189 4.219-4.189s4.219 1.875 4.219 4.189s-1.89 4.19-4.219 4.19m16.013 0c-2.331 0-4.219-1.875-4.219-4.19c0-2.314 1.888-4.189 4.219-4.189c2.329 0 4.219 1.875 4.219 4.189c-.001 2.315-1.89 4.19-4.219 4.19");
}
</style><path class="t7pksubfi"/>`,
		"fallback": "emojione-monotone:speech-balloon",
	});
}

export default Component;
