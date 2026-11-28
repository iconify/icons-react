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
		"content": `<style>.gm5ip43uz {
  d: path("M19 2V10M15 6H23M17.412 13.082L18.333 13.471C20.554 14.409 22 16.589 22 19V20C22 20.552 21.552 21 21 21H20");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zkxv8acvn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8 12H10C13.728 12 17 15.272 17 19V20V21C17 21.552 16.552 22 16 22H2C1.448 22 1 21.552 1 21V20V19C1 15.272 4.272 12 8 12ZM9 2C11.071 2 13 3.929 13 6C13 8.071 11.071 10 9 10C6.929 10 5 8.071 5 6C5 3.929 6.929 2 9 2Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="gm5ip43uz"/><path clip-rule="evenodd" class="zkxv8acvn"/></g>`,
		"fallback": "keyline-icons:users-plus-sharp-fill",
	});
}

export default Component;
