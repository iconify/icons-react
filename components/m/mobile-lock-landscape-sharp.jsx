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
		"content": `<style>.b7rpjbbtc {
  fill: currentColor;
  d: path("M9.23 15.654h5.54v-4.538h-.981v-1q0-.749-.511-1.26q-.51-.51-1.259-.51t-1.259.51t-.51 1.26v1H9.23zm1.79-4.538v-1q0-.425.287-.713t.712-.288t.713.288t.287.713v1zM2 18V5.923h4.83V5h3.686v.923H22V18z");
}
</style><path class="b7rpjbbtc"/>`,
		"fallback": "material-symbols-light:mobile-lock-landscape-sharp",
	});
}

export default Component;
