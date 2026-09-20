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
		"content": `<style>.nygn6pb_z {
  fill: currentColor;
  d: path("M4.385 15.923q-.344 0-.576-.232t-.232-.576v-6.23q0-.344.232-.576t.576-.232h6.23q.344 0 .576.232t.232.576V11.5h9q.213 0 .356.144t.144.357t-.144.356t-.356.143h-9v2.616q0 .343-.232.575t-.575.232z");
}
</style><path class="nygn6pb_z"/>`,
		"fallback": "material-symbols-light:line-start-square-rounded",
	});
}

export default Component;
