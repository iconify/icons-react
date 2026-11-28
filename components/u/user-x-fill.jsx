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
		"content": `<style>.ddxwk17ku {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13 6C13 8.209 11.2091 10 9 10C6.7909 10 5 8.209 5 6C5 3.791 6.7909 2 9 2C11.2091 2 13 3.791 13 6ZM8 12H10C13.866 12 17 15.134 17 19V20C17 21.105 16.1046 22 15 22H3C1.8954 22 1 21.105 1 20V19C1 15.134 4.134 12 8 12Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o1-2j8bsn {
  d: path("M16 3L22 9M22 3L16 9");
}
</style><g class="nrj6p8qat"><path class="o1-2j8bsn"/><path clip-rule="evenodd" class="ddxwk17ku"/></g>`,
		"fallback": "keyline-icons:user-x-fill",
	});
}

export default Component;
