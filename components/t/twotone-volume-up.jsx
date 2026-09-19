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
		"content": `<style>.q4yco55_l {
  fill: currentColor;
  d: path("M5 13h2.83L10 15.17V8.83L7.83 11H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.qojeotyhp {
  fill: currentColor;
  d: path("M3 9v6h4l5 5V4L7 9zm7-.17v6.34L7.83 13H5v-2h2.83zm4-.86v8.05c1.48-.73 2.5-2.25 2.5-4.02A4.5 4.5 0 0 0 14 7.97m0-4.74v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77");
}
</style><path class="q4yco55_l"/><path class="qojeotyhp"/>`,
		"fallback": "ic:twotone-volume-up",
	});
}

export default Component;
