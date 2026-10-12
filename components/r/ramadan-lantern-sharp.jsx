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
		"content": `<style>.azktfcbhp {
  d: path("M12 5V2.75M8.5 8.5a3.5 3.5 0 0 1 7 0Zm.25 0H16l.45.6l.6.8l.45.6V19h-11v-8.5l.45-.6l.6-.8l.45-.6z");
}

.pxx6--wew {
  d: path("M10 16.5V11h4v5.5ZM5.25 19h13.5v2.25H5.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="azktfcbhp"/><path class="pxx6--wew"/></g>`,
		"fallback": "iconoven:ramadan-lantern-sharp",
	});
}

export default Component;
