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
		"content": `<style>.uvy_5_9sk {
  fill: currentColor;
  d: path("M5 19V5.616q0-.672.472-1.144T6.616 4h10.769q.67 0 1.143.472q.472.472.472 1.144V19h1.5q.214 0 .357.143T21 19.5t-.143.357T20.5 20h-17q-.213 0-.357-.143T3 19.5t.143-.357T3.5 19zm1-7.404h12v-5.98q0-.27-.173-.443T17.385 5H6.615q-.269 0-.442.173T6 5.616zM6 19h12v-6.404h-5.5v2.646q.292.154.464.414q.17.26.17.594q0 .475-.33.805t-.804.33t-.805-.33t-.33-.805q0-.334.172-.591q.17-.257.463-.411v-2.652H6zM6 5h12z");
}
</style><path class="uvy_5_9sk"/>`,
		"fallback": "material-symbols-light:roller-shades-outline-rounded",
	});
}

export default Component;
