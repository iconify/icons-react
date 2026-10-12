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
		"content": `<style>.et0lzmyju {
  d: path("M13.5 9.25a1.5 1.5 0 1 1-3 0a1.5 1.5 0 1 1 3 0m-4.75-6.5v1m6.5-1v1M8.75 17.5c-3.4.35-6 1.1-6 1.9c0 1.05 4.15 1.85 9.25 1.85s9.25-.8 9.25-1.85c0-.8-2.6-1.55-6-1.9");
}

.qmea0acxv {
  d: path("M12 17h-.394l-.286-.27c-2.07-1.93-4.07-4.58-4.07-7.48a4.75 4.75 0 0 1 9.5 0c0 2.9-2 5.55-4.07 7.48l-.286.27z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qmea0acxv"/><path class="et0lzmyju"/></g>`,
		"fallback": "iconoven:pin-drop-sharp",
	});
}

export default Component;
