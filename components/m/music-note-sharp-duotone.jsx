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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ofxmwn6wx {
  fill: currentColor;
  d: path("M10 18C10 20.0711 8.0711 22 6 22C3.9289 22 2 20.0711 2 18C2 15.9289 3.9289 14 6 14C8.0711 14 10 15.9289 10 18ZM22 16C22 18.0711 20.0711 20 18 20C15.9289 20 14 18.0711 14 16C14 13.9289 15.9289 12 18 12C20.0711 12 22 13.9289 22 16Z");
  stroke: none;
}

.x9mxjjj0o {
  stroke-opacity: 0.4;
  d: path("M9 18L9 5L21 3L21 16");
}
</style><g class="gp_8x1bzb"><path class="x9mxjjj0o"/><path class="ofxmwn6wx"/></g>`,
		"fallback": "keyline-icons:music-note-sharp-duotone",
	});
}

export default Component;
