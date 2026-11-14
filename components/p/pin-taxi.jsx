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
		"content": `<style>.h0wlljbkg {
  d: path("M2.5 16.5v-3.75l3-1l3-4.25h7l3 4.25l3 1v3.75Z");
}

.q5vjd7bqj {
  fill: currentColor;
  d: path("M10 4.5h4v3h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5qyo_byt {
  d: path("M5.5 11.75h13M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="h0wlljbkg"/><path class="q5vjd7bqj"/><path class="x5qyo_byt"/></g>`,
		"fallback": "uix-sharp:pin-taxi",
	});
}

export default Component;
