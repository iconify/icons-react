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
		"content": `<style>.o0uc6p-po {
  fill: currentColor;
  d: path("M12.75 9.5h3V15h-3Z");
}

.o0uxpabcc {
  d: path("M2.5 3.5h19v17h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vq_z6bcur {
  d: path("m7 9l3 3l-3 3");
}
</style><g class="ulnmmdpxh"><path class="o0uxpabcc"/><path class="vq_z6bcur"/><path class="o0uc6p-po"/></g>`,
		"fallback": "uix-sharp:terminal-cursor",
	});
}

export default Component;
