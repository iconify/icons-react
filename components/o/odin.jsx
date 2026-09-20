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
		"content": `<style>.py5wsab5t {
  fill: var(--svg-color--0c0c0c, #0c0c0c);
  d: path("M17.913 18.766A8.984 8.984 0 0 1 5.233 6.087l3.398 3.397v5.885h5.885zm.853-.853A8.984 8.984 0 0 0 6.087 5.233l3.397 3.398h5.885v5.885z");
}
</style><path class="py5wsab5t"/>`,
		"fallback": "token-branded:odin",
	});
}

export default Component;
