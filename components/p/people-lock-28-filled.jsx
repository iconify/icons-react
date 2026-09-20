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
		"content": `<style>.ndcl19bjx {
  fill: currentColor;
  d: path("M20 14a3 3 0 0 1 3 3v1h.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h.5v-1a3 3 0 0 1 3-3m0 7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-5.25-6c.581 0 1.11.222 1.509.584A4 4 0 0 0 16 17v.041A3 3 0 0 0 13.5 20v2.323c-1.012.41-2.317.677-4 .677C2 23 2 17.75 2 17.75v-.5A2.25 2.25 0 0 1 4.25 15zm5.25.5a1.5 1.5 0 0 0-1.5 1.5v1h3v-1a1.5 1.5 0 0 0-1.5-1.5M9.5 4a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9M20 6a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7");
}
</style><path class="ndcl19bjx"/>`,
		"fallback": "fluent:people-lock-28-filled",
	});
}

export default Component;
