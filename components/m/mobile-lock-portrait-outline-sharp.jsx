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
		"content": `<style>.fn9zb8b_j {
  fill: currentColor;
  d: path("M5 23V1h14v5.1h1v4.8h-1V23zm2-2h10V3H7zm0 0V3zm2-5h6v-5h-1v-1q0-.825-.587-1.412T12 8t-1.412.588T10 10v1H9zm2-5v-1q0-.425.288-.712T12 9t.713.288T13 10v1z");
}
</style><path class="fn9zb8b_j"/>`,
		"fallback": "material-symbols:mobile-lock-portrait-outline-sharp",
	});
}

export default Component;
