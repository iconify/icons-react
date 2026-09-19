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
		"content": `<style>.dqqt_sbxx {
  fill: currentColor;
  d: path("M13.12 16c.69 0 1.15-.69.9-1.32L9.77 3.87a1.363 1.363 0 0 0-2.54 0L2.98 14.68c-.25.63.22 1.32.9 1.32c.4 0 .76-.25.91-.63L5.67 13h5.64l.9 2.38c.15.37.51.62.91.62m-6.69-5L8.5 5.48L10.57 11zm14.46 1.29l-7.39 7.39l-2.97-2.97a.996.996 0 1 0-1.41 1.41l3.68 3.68c.39.39 1.02.39 1.41 0l8.08-8.09a.996.996 0 0 0 0-1.41a.993.993 0 0 0-1.4-.01");
}
</style><path class="dqqt_sbxx"/>`,
		"fallback": "ic:round-spellcheck",
	});
}

export default Component;
