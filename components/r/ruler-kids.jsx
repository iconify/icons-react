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
		"content": `<style>.zi1y9_btx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.808 16.95L16.95 2.808l4.242 4.242L7.05 21.192Zm2.828-2.829l1.768 1.768M7.757 12l1.061 1.061m1.061-3.182l1.767 1.767M12 7.757l1.061 1.061m1.06-3.182l1.768 1.768");
}
</style><path class="zi1y9_btx"/>`,
		"fallback": "uix-sharp:ruler-kids",
	});
}

export default Component;
