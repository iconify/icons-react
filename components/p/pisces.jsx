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
		"content": `<style>.aek_-09jn {
  fill: var(--svg-color--fcc21b, #fcc21b);
  d: path("M116.14 56.51H95.95c1.73-22.17 9.41-40.08 12.61-46.71H89.13c-4.25 10.39-9.65 27.03-10.97 46.71H49C47.68 36.83 42.27 20.19 38.03 9.8H18.6c3.2 6.65 10.88 24.55 12.61 46.71H11.86v17.75h19.35c-1.73 22.16-9.41 40.07-12.61 46.71h19.43c4.25-10.39 9.65-27.02 10.97-46.71h29.16c1.32 19.68 6.73 36.32 10.97 46.71h19.43c-3.2-6.64-10.88-24.54-12.61-46.71h20.19z");
}
</style><path class="aek_-09jn"/>`,
		"fallback": "noto-v1:pisces",
	});
}

export default Component;
