import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tcgfi6b_o {
  cx: 64px;
  cy: 64px;
  r: 32px;
  fill: var(--svg-color--40c0e7, #40c0e7);
}

.y_aqcmi-i {
  fill: none;
  d: path("M128 128H0V0h128z");
}
</style><path class="y_aqcmi-i"/><circle class="tcgfi6b_o"/>`,
		"fallback": "noto-v1:record-button",
	});
}

export default Component;
