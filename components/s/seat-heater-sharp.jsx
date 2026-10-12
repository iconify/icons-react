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
		"content": `<style>.f8aj6dbsv {
  d: path("M4.5 3.5H7l.27 1.73l1.21 7.54l.27 1.73H20l.22 1.74l.06.52l.22 1.74h-16l-.2-1.74L2.95 5.24l-.2-1.74zm4.5 15v2.75m7-2.75v2.75");
}

.ffxbyiwvk {
  d: path("M12 11.5c-1-1.25 1-2.5 0-3.75s1-2.5 0-3.75m4.5 7.5c-1-1.25 1-2.5 0-3.75s1-2.5 0-3.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="f8aj6dbsv"/><path class="ffxbyiwvk"/></g>`,
		"fallback": "iconoven:seat-heater-sharp",
	});
}

export default Component;
