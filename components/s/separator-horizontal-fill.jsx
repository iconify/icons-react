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
		"content": `<style>.d79a7rn_w {
  d: path("M3 12H21");
}

.nlaotdb_c {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2L17 2C18.6569 2 20 3.3431 20 5L20 6C20 7.6569 18.6569 9 17 9L7 9C5.3431 9 4 7.6569 4 6L4 5C4 3.3431 5.3431 2 7 2ZM12 15L17 15C18.6569 15 20 16.3431 20 18L20 19C20 20.6569 18.6569 22 17 22L7 22C5.3431 22 4 20.6569 4 19L4 18C4 16.3431 5.3431 15 7 15Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="nlaotdb_c"/><path class="d79a7rn_w"/></g>`,
		"fallback": "keyline-icons:separator-horizontal-fill",
	});
}

export default Component;
