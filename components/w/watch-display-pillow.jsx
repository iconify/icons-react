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
		"content": `<style>.e9_wkyb0l {
  fill: currentColor;
  d: path("M9.75 2.5h4.5v2.75h-4.5Zm0 11.75h4.5V17h-4.5Z");
}

.ej6sifbyh {
  d: path("M8 9.75a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM3 18h18v3.5H3Z");
}

.stv7yz1mi {
  d: path("M12 7.75v2l1.5 1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ej6sifbyh"/><path class="e9_wkyb0l"/><path class="stv7yz1mi"/></g>`,
		"fallback": "uix-sharp:watch-display-pillow",
	});
}

export default Component;
