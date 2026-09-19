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
		"content": `<style>.e13fbxefv {
  fill: currentColor;
  d: path("M4 6c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m9 16c-.56 0-1.02-.44-1.05-1l-.45-9L8 11H2c-.55 0-1-.45-1-1s.45-1 1-1h5l6.26-4.47c.42-.3 1-.23 1.34.16c.38.45.3 1.12-.18 1.46L11.14 8.5H14l7.09-4.09a.98.98 0 0 1 1.1 1.62L14.5 12l-.45 9c-.03.56-.49 1-1.05 1");
}
</style><path class="e13fbxefv"/>`,
		"fallback": "ic:round-sports-gymnastics",
	});
}

export default Component;
