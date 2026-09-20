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
		"content": `<style>.t8rm69byn {
  fill: currentColor;
  d: path("m12.192 16.827l2.406-4.327H2.5v-1h12.098l-2.406-4.327L19.788 12z");
}
</style><path class="t8rm69byn"/>`,
		"fallback": "material-symbols-light:line-end-arrow-notch",
	});
}

export default Component;
