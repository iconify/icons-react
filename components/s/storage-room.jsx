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
		"content": `<style>.wknrf9bbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18v9.5H3Zm3-9h12v9H6Zm6 9v3.5M12 3v3.5m-6 12h3");
}
</style><path class="wknrf9bbm"/>`,
		"fallback": "uix-sharp:storage-room",
	});
}

export default Component;
