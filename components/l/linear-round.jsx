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
		"content": `<style>.diofki2lu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3.307 9.67l11.022 11.023M3.898 15.92l4.183 4.183M5.292 6a9 9 0 1 1 12.709 12.709Z");
}
</style><path class="diofki2lu"/>`,
		"fallback": "coolicons:linear-round",
	});
}

export default Component;
