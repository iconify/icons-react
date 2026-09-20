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
		"content": `<style>.aj2tr9bdr {
  fill: currentColor;
  d: path("M5 19V5.616q0-.667.475-1.141T6.615 4h10.77q.666 0 1.14.475T19 5.615V19h1.5q.213 0 .356.144t.144.357t-.144.356T20.5 20h-17q-.213 0-.356-.144T3 19.499t.144-.356T3.5 19zm1 0h12v-6.404h-5.5v2.646q.292.154.464.414q.17.26.17.594q0 .47-.333.802t-.805.333t-.8-.333t-.33-.802q0-.334.17-.591q.172-.257.464-.411v-2.652H6z");
}
</style><path class="aj2tr9bdr"/>`,
		"fallback": "material-symbols-light:roller-shades-rounded",
	});
}

export default Component;
