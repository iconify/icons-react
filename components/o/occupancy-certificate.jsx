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
		"content": `<style>.i7bi7hbey {
  d: path("M14.75 21.75v-7.5H21v7.5");
}

.pmzhhkmpk {
  d: path("M11.9 18H2.5V3.5h19v7.9M6 7.5h12M6 11h5.9");
}

.s6j3xwxah {
  d: path("m14.75 14.25l3.5 1.25v6.25h-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pmzhhkmpk"/><path class="i7bi7hbey"/><path class="s6j3xwxah"/></g>`,
		"fallback": "uix-sharp:occupancy-certificate",
	});
}

export default Component;
