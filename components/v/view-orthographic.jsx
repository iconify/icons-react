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
		"content": `<style>.ezz8p8b2a {
  d: path("m3 7.5l9 4.5l9-4.5M12 12v9");
}

.kpgchab7o {
  d: path("m12 3l9 4.5v9L12 21l-9-4.5v-9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kpgchab7o"/><path class="ezz8p8b2a"/></g>`,
		"fallback": "uix-sharp:view-orthographic",
	});
}

export default Component;
