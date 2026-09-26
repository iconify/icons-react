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
		"content": `<style>.y_l3fw_0j {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.4645 3L21 6.5355L6.5355 21L3 17.4645L17.4645 3ZM13.1251 7.3393L16.6607 10.8749");
}
</style><path class="y_l3fw_0j"/>`,
		"fallback": "keyline-icons:wand-sharp",
	});
}

export default Component;
