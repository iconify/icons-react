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
		"content": `<style>.tha5swbxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 20v-8h16v8Zm8 -8v8m-4 -8V4h8v8");
}
</style><path class="tha5swbxc"/>`,
		"fallback": "iconmind:inventory-count-outline-regular",
	});
}

export default Component;
