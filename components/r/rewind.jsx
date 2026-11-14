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
		"content": `<style>.ahpv54rwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m21 6l-8.5 6l8.5 6Zm-9.5 0L3 12l8.5 6Z");
}
</style><path class="ahpv54rwh"/>`,
		"fallback": "uix-sharp:rewind",
	});
}

export default Component;
