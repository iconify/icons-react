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
		"content": `<style>.uxxb-y3rc {
  fill: currentColor;
  d: path("M3 7.385V3h.885v2.506q1.992-1.533 4.013-2.279t4.16-.746q2.996 0 5.44 1.338T21 7.385h-.94q-1.143-1.87-3.28-2.944t-4.722-1.075q-2.085 0-4.052.774T4.1 6.5h3.285v.885zM10.806 21l-5.667-5.654l.92-.894l3.441.857V6.5h1v10.152l-3.637-.983L11.214 20H18v-7h1v8zm1.521-6.5V5h1v9.5zm2.846 0V11h1v3.5zm-.725 2.635");
}
</style><path class="uxxb-y3rc"/>`,
		"fallback": "material-symbols-light:swipe-left-2-outline-sharp",
	});
}

export default Component;
