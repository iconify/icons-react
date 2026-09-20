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
		"content": `<style>.crtp0ab-d {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M40.37 81.55V66.3L7.34 90.51l33.03 24.21V99.55h18.99c37.33 0 61.3-10.93 61.3-43.14s-23.97-43.14-61.3-43.14H16.6v17.94h42.76c31.8 0 43.36 6.83 43.36 25.2c0 18.38-11.55 25.21-43.36 25.21H40.37z");
}
</style><path class="crtp0ab-d"/>`,
		"fallback": "noto-v1:right-arrow-curving-left",
	});
}

export default Component;
