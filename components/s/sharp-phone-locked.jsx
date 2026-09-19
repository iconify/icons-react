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
		"content": `<style>.fyr8n3bgq {
  fill: currentColor;
  d: path("m21 15l-5-1l-2.9 2.9c-2.5-1.43-4.57-3.5-6-6L10 8L9 3H3c0 3.28.89 6.35 2.43 9c1.58 2.73 3.85 4.99 6.57 6.57C14.65 20.1 17.72 21 21 21z");
}

.hv5t__boh {
  fill: currentColor;
  d: path("M20 5V4c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1v5h6V5zm-1 0h-2V4c0-.55.45-1 1-1s1 .45 1 1z");
}
</style><path class="hv5t__boh"/><path class="fyr8n3bgq"/>`,
		"fallback": "ic:sharp-phone-locked",
	});
}

export default Component;
