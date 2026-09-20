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
		"content": `<style>.es6tr8bpa {
  fill: var(--svg-color--fff, #fff);
  d: path("M3 6.6h8.55v1.35H3zm3.6 2.25h1.35v8.55H6.6zm5.85-2.25H21v1.35h-8.55zm3.6 2.25h1.35v8.55h-1.35z");
}
</style><path class="es6tr8bpa"/>`,
		"fallback": "token-branded:traxx",
	});
}

export default Component;
