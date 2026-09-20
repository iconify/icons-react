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
		"content": `<style>.klift8b_q {
  fill: currentColor;
  d: path("M6 22V2h12.077v4.83H19v3.686h-.923V22zm1-1h10.077V3H7zm0 0V3zm2.23-5.346h5.54v-4.538h-.981v-1q0-.749-.511-1.26q-.51-.51-1.259-.51t-1.259.51t-.51 1.26v1H9.23zm1.79-4.539v-1q0-.425.287-.712t.712-.288t.713.288t.287.712v1z");
}
</style><path class="klift8b_q"/>`,
		"fallback": "material-symbols-light:mobile-lock-portrait-outline-sharp",
	});
}

export default Component;
