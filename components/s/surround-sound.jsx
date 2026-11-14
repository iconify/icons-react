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
		"content": `<style>.inrj4d9ip {
  d: path("M19.75 7.5a9 9 0 0 1 0 9m-3.25 3.25a9 9 0 0 1-9 0M4.25 16.5a9 9 0 0 1 0-9M7.5 4.25a9 9 0 0 1 9 0m.25 5a5.5 5.5 0 0 1 0 5.5m-2 2a5.5 5.5 0 0 1-5.5 0m-2-2a5.5 5.5 0 0 1 0-5.5m2-2a5.5 5.5 0 0 1 5.5 0");
}

.qml7jwd3v {
  fill: currentColor;
  d: path("M10.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="inrj4d9ip"/><path class="qml7jwd3v"/></g>`,
		"fallback": "uix-sharp:surround-sound",
	});
}

export default Component;
