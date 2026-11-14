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
		"content": `<style>.e4i927toy {
  d: path("M12.164 20.382L11 21l-8-4.25v-8.5L11 4l8 4.25v6.941");
}

.r_rndobuu {
  d: path("m3 8.25l8 4.25l8-4.25m-8 4.25V21m4-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e4i927toy"/><path class="r_rndobuu"/></g>`,
		"fallback": "uix-sharp:resource-delete",
	});
}

export default Component;
