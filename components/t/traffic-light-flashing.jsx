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
		"content": `<style>.c_vnjjbwa {
  d: path("M10.5 17.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-8-8.25l2.25 1m-2.25 4l2.25-1m16.75-4l-2.25 1m2.25 4l-2.25-1");
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

.x8vxq702n {
  d: path("M7.5 2h9v20h-9Z");
}

.ykh54vprp {
  d: path("M10.5 6.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="x8vxq702n"/><path class="ykh54vprp"/><path class="qml7jwd3v"/><path class="c_vnjjbwa"/></g>`,
		"fallback": "uix-sharp:traffic-light-flashing",
	});
}

export default Component;
