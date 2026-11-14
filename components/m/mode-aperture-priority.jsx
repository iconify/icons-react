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
		"content": `<style>.f7na1bc9l {
  d: path("M3.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0ZM12 2.5v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vk9hti-iz {
  d: path("m8.75 17.5l3.25-9l3.25 9M10 14.25h4");
}
</style><g class="ulnmmdpxh"><path class="f7na1bc9l"/><path class="vk9hti-iz"/></g>`,
		"fallback": "uix-sharp:mode-aperture-priority",
	});
}

export default Component;
