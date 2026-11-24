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
		"content": `<style>.lb8u9_b8o {
  fill: currentColor;
  d: path("m1.168 19.445l10-15a1 1 0 0 1 1.664 0l10 15A1 1 0 0 1 22 21H2a1 1 0 0 1-.832-1.555M3.869 19h10.829L11.604 7.397Z");
}
</style><path class="lb8u9_b8o"/>`,
		"fallback": "coolicons:pyramid-fill-sharp",
	});
}

export default Component;
