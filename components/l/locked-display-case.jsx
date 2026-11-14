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
		"content": `<style>.e-9-iu9mj {
  d: path("M3.5 2.5h17v9h-17Zm8.2 19H2.5v-10h19v1.9M3.5 7h17M6 9.75L7.75 8M12 11.5v3.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wfcg7bb6i {
  d: path("M14.5 17.5h7V22h-7Zm1.75 0v-1.25a1.75 1.75 0 0 1 3.5 0v1.25");
}
</style><g class="ulnmmdpxh"><path class="e-9-iu9mj"/><path class="wfcg7bb6i"/></g>`,
		"fallback": "uix-sharp:locked-display-case",
	});
}

export default Component;
