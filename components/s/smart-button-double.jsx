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
		"content": `<style>.rygxbt8op {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.75 4h8.5q2.485 0 4.243 1.757Q22.25 7.515 22.25 10v4q0 2.485-1.757 4.243Q18.735 20 16.25 20h-8.5q-2.485 0-4.243-1.757Q1.75 16.485 1.75 14v-4q0-2.485 1.757-4.243Q5.265 4 7.75 4");
}
</style><path class="rygxbt8op"/>`,
		"fallback": "uix-solid:smart-button-double",
	});
}

export default Component;
