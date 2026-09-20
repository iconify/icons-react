import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ov45av1-f {
  fill: currentColor;
  d: path("M4.999 1a3.999 3.999 0 1 0 0 7.997a3.999 3.999 0 0 0 0-7.997M0 4.999a4.999 4.999 0 1 1 9.997 0a4.999 4.999 0 0 1-9.997 0");
}
</style><path class="ov45av1-f"/>`,
		"fallback": "fluent:presence-unknown-10-regular",
	});
}

export default Component;
