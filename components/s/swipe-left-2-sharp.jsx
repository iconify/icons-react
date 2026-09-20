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
		"content": `<style>.q62tq9w9i {
  fill: currentColor;
  d: path("M3 7.385V3h.885v2.506q1.992-1.533 4.013-2.279t4.16-.746q2.996 0 5.44 1.338T21 7.385h-.94q-1.143-1.87-3.28-2.944t-4.722-1.075q-2.085 0-4.052.774T4.1 6.5h3.285v.885zM10.806 21l-5.667-5.654l.92-.894l3.441.857V6.5h1v7.77h1.827V5h1v9.27h1.846V11h1v3.27H18V13h1v8z");
}
</style><path class="q62tq9w9i"/>`,
		"fallback": "material-symbols-light:swipe-left-2-sharp",
	});
}

export default Component;
