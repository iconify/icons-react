import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f5cjpkb0y {
  fill: currentColor;
  d: path("M2 14C2 7.373 7.373 2 14 2s12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14m15.265-6.778a.73.73 0 0 0-1.048 0a.773.773 0 0 0 0 1.074c3.074 3.15 3.074 8.259 0 11.41a.773.773 0 0 0 0 1.073a.73.73 0 0 0 1.048 0c3.652-3.744 3.652-9.813 0-13.557M12.469 9.22a.753.753 0 0 0 0 1.062a5.27 5.27 0 0 1 0 7.436a.753.753 0 0 0 0 1.062a.747.747 0 0 0 1.06 0a6.774 6.774 0 0 0 0-9.56a.747.747 0 0 0-1.06 0m-2.666 1.998a.783.783 0 0 0-1.08 0a.72.72 0 0 0 0 1.041a2.4 2.4 0 0 1 0 3.484a.72.72 0 0 0 0 1.041a.783.783 0 0 0 1.08 0a3.84 3.84 0 0 0 0-5.566");
}
</style><path class="f5cjpkb0y"/>`,
		"fallback": "fluent:payment-wireless-28-filled",
	});
}

export default Component;
