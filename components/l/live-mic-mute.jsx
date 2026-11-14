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
		"content": `<style>.cvnc7cb1k {
  d: path("M7 3h4a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z");
}

.jnof8gp5m {
  d: path("M3 10.5a6 6 0 0 0 12 0m-6 6V21m7.5-17l4 4m0-4l-4 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cvnc7cb1k"/><path class="jnof8gp5m"/></g>`,
		"fallback": "uix-sharp:live-mic-mute",
	});
}

export default Component;
