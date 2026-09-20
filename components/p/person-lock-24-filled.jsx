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
		"content": `<style>.zhvd84b0x {
  fill: currentColor;
  d: path("M14 14.05V14H4.253a2.25 2.25 0 0 0-2.25 2.25v.919c0 .572.18 1.13.511 1.596C4.056 20.929 6.58 22 10 22q1.072 0 2.026-.14A2.5 2.5 0 0 1 12 21.5v-5a2.5 2.5 0 0 1 2-2.45M10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10M15 15v-1a2.5 2.5 0 0 1 5 0v1h.5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5zm1.5-1v1h2v-1a1 1 0 1 0-2 0m2 5a1 1 0 1 0-2 0a1 1 0 0 0 2 0");
}
</style><path class="zhvd84b0x"/>`,
		"fallback": "fluent:person-lock-24-filled",
	});
}

export default Component;
