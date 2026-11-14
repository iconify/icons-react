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
		"content": `<style>.dqm_lyb8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.524 10.282l4.946 1.798A1.028 1.028 0 0 1 17.5 14l-1.804.721a1.75 1.75 0 0 0-.975.975L14 17.5a1.028 1.028 0 0 1-1.92-.03l-1.798-4.946a1.75 1.75 0 0 1 2.242-2.242M6.102 8.224a3 3 0 0 1 2.122-2.122M2.845 7.915a6.25 6.25 0 0 1 5.07-5.07");
}
</style><path class="dqm_lyb8z"/>`,
		"fallback": "uix:intent-signal",
	});
}

export default Component;
