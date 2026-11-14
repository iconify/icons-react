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
		"content": `<style>.gw2e-lmuw {
  d: path("M9.5 4.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.mb7-8ybdh {
  d: path("M12 16.75C12 20 15 21.5 18.5 20m-9-10h-3V7m8 3h3V7m-8 7h-3v3m8-3h3v3");
}

.n9ycv_b_o {
  d: path("M9.25 12a2.75 4.75 0 1 0 5.5 0a2.75 4.75 0 1 0-5.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gw2e-lmuw"/><path class="n9ycv_b_o"/><path class="mb7-8ybdh"/></g>`,
		"fallback": "uix-sharp:salamander",
	});
}

export default Component;
