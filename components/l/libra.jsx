import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.krg0b8e3y {
  fill: var(--svg-color--fcc21b, #fcc21b);
  d: path("M99.85 77.37c5.2-7.29 8.23-16.15 8.23-25.54c0-24.3-19.78-44.07-44.08-44.07c-24.31 0-44.08 19.77-44.08 44.08c0 9.39 3.03 18.25 8.23 25.54H13.81v17.75h41.67v-18.4C45 73.12 37.67 63.12 37.67 51.83C37.67 37.32 49.48 25.5 64 25.5s26.33 11.81 26.33 26.33c0 11.29-7.33 21.28-17.81 24.88v18.4h41.67V77.37zM55.48 102.5H13.81v17.74h100.38V102.5H72.52z");
}
</style><path class="krg0b8e3y"/>`,
		"fallback": "noto-v1:libra",
	});
}

export default Component;
