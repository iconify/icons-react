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
		"content": `<style>.her2aeb3r {
  fill: currentColor;
  d: path("M13 14.05V14H4.253a2.25 2.25 0 0 0-2.25 2.25v.919c0 .572.18 1.13.511 1.596C4.056 20.929 6.58 22 10 22q.537 0 1.043-.035A2.5 2.5 0 0 1 11 21.5v-5a2.5 2.5 0 0 1 2-2.45M10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10M14 15h-.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5H21v-1.25A1.75 1.75 0 0 0 19.25 12h-3.5A1.75 1.75 0 0 0 14 13.75zm1.5-1.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25V15h-4z");
}
</style><path class="her2aeb3r"/>`,
		"fallback": "fluent:person-accounts-24-filled",
	});
}

export default Component;
