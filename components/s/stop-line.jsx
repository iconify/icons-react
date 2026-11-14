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
		"content": `<style>.evelys07t {
  fill: currentColor;
  d: path("M5.75 11.5h12.5v3H5.75Z");
}

.i2-ny_bzf {
  d: path("M12 3v4");
}

.liukvs2qv {
  d: path("M3 2.5v19m18-19v19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="liukvs2qv"/><path class="evelys07t"/><path class="i2-ny_bzf"/></g>`,
		"fallback": "uix-sharp:stop-line",
	});
}

export default Component;
