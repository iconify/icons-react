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
		"content": `<style>.sng9upc4w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.25 7.25Q16 7.25 16 9q0 .389-.086.691q.588.3 1.091.804Q18.25 11.74 18.25 13.5V18q0 1.76-1.245 3.005T14 22.25h-4q-1.76 0-3.005-1.245T5.75 18v-4.5q0-1.76 1.245-3.005q.503-.504 1.091-.804Q8 9.389 8 9q0-1.75 1.75-1.75V5q0-2.25 2.25-2.25T14.25 5zm-1.5 0V5q0-.75-.75-.75t-.75.75v2.25zM12 12q-3.75 0-3.75 3.75T12 19.5t3.75-3.75T12 12");
}
</style><path class="sng9upc4w"/>`,
		"fallback": "uix-solid:vitamin-drops",
	});
}

export default Component;
