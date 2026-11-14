import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i23099bav {
  fill: currentColor;
  d: path("M25.572 16.35a2.88 2.88 0 0 1 4.144.057a2.883 2.883 0 0 1-.072 4.018l-8.609 8.543c-.351.349-.79.597-1.27.72l-3.019.779a1 1 0 0 1-1.217-1.22l.79-3.052a2.66 2.66 0 0 1 .686-1.205zM21.55 3c1.193 0 2.339.474 3.182 1.318l2.95 2.95A4.5 4.5 0 0 1 29 10.45v3.77a4.4 4.4 0 0 0-2-.177V10.45c0-.663-.264-1.3-.732-1.768l-2.95-2.95A2.5 2.5 0 0 0 22 5.041V9.5a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 9 9.5V5H7.5A2.5 2.5 0 0 0 5 7.5v17a2.5 2.5 0 0 0 2 2.45V18.5A2.5 2.5 0 0 1 9.5 16h13c.384 0 .746.089 1.07.243L21.828 18H9.5a.5.5 0 0 0-.5.5V27h5.566l-.484 1.871q-.016.064-.028.129H7.5A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3zM11 9.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V5h-9z");
}
</style><path class="i23099bav"/>`,
		"fallback": "fluent:save-edit-32-regular",
	});
}

export default Component;
