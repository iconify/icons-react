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
		"content": `<style>.q753xm_ce {
  fill: currentColor;
  d: path("M5 20q-.64 0-.909-.57t.128-1.065L10 11.346V5H8.116V4h7.769v1H14v6.346l5.78 7.02q.397.494.129 1.064T19 20z");
}
</style><path class="q753xm_ce"/>`,
		"fallback": "material-symbols-light:science-sharp",
	});
}

export default Component;
