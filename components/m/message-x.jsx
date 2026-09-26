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
		"content": `<style>.bj4y8ib7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.5686 16.353 C2.915 14.8839 2 12.9769 2 11 C2 6.5817 6.4772 3 12 3 C17.5228 3 22 6.5817 22 11 C22 15.4183 17.5228 19 12 19 C11.1845 19 10.3721 18.9202 9.5808 18.7624 L5 21 L4.5686 16.353 ZM9 8 L15 14 M15 8 L9 14");
}
</style><path class="bj4y8ib7t"/>`,
		"fallback": "keyline-icons:message-x",
	});
}

export default Component;
