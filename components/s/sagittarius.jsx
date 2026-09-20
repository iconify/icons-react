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
		"content": `<style>.qkzwymbli {
  fill: var(--svg-color--fcc21b, #fcc21b);
  d: path("M47.44 14.81v16.57h37.47L47.44 68.84l-15.6-15.6l-11.72 11.71l15.61 15.61l-20.92 20.91l11.72 11.72l20.91-20.92l15.61 15.6l11.71-11.71l-15.6-15.6l37.46-37.47v37.46h16.57V14.81z");
}
</style><path class="qkzwymbli"/>`,
		"fallback": "noto-v1:sagittarius",
	});
}

export default Component;
