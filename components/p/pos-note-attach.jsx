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
		"content": `<style>.e-36feb-c {
  d: path("M18.5 22v-3.25h3.25");
}

.edkl8j64e {
  d: path("M14.25 14.5h7.5v4.25L18.5 22h-4.25Z");
}

.tslyur56h {
  d: path("M11.446 20.684L8.5 19L5 21V3h14v8.7M8.5 7.5h7m-7 3.5h7m-7 3.5h2.9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tslyur56h"/><path class="edkl8j64e"/><path class="e-36feb-c"/></g>`,
		"fallback": "uix-sharp:pos-note-attach",
	});
}

export default Component;
