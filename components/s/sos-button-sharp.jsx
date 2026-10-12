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
		"content": `<style>.r5-dwredr {
  d: path("M2.75 5h18.5v14H2.75z");
}

.rxha-cbto {
  d: path("M8 10.25V9H5.5v1.25c0 1.75 2.5 1 2.5 3.25V15H5.5v-1.25M12 9c.83 0 1.5 1.35 1.5 3s-.67 3-1.5 3s-1.5-1.35-1.5-3s.67-3 1.5-3Zm6.5 1.25V9H16v1.25c0 1.75 2.5 1 2.5 3.25V15H16v-1.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="r5-dwredr"/><path class="rxha-cbto"/></g>`,
		"fallback": "iconoven:sos-button-sharp",
	});
}

export default Component;
