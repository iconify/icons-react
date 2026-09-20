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
		"content": `<style>.zgdz79bvi {
  fill: var(--svg-color--febe05, #febe05);
  d: path("M3 3h11.893a6.107 6.107 0 0 1 0 12.214H8.786V8.786H3zm5.786 12.214V21H3v-5.786z");
}
</style><path class="zgdz79bvi"/>`,
		"fallback": "token-branded:propc",
	});
}

export default Component;
