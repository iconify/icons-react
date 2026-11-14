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
		"content": `<style>.cjh2xzbpr {
  d: path("M6 19.5a6 2 0 1 0 12 0a6 2 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xq6f1f_jn {
  d: path("M12 2.5v11m-6 6c0-8 12-8 12 0");
}
</style><g class="ulnmmdpxh"><path class="xq6f1f_jn"/><path class="cjh2xzbpr"/></g>`,
		"fallback": "uix-sharp:unclog-drain",
	});
}

export default Component;
