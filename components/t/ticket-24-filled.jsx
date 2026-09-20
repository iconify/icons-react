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
		"content": `<style>.kptimqc0c {
  d: path("M20.75 5c.69 0 1.25.56 1.25 1.25v2.259a.75.75 0 0 1-.697.748a2.75 2.75 0 0 0 0 5.486a.75.75 0 0 1 .697.748v2.259c0 .69-.56 1.25-1.25 1.25H3.25C2.56 19 2 18.44 2 17.75v-2.259a.75.75 0 0 1 .697-.748a2.75 2.75 0 0 0 0-5.486A.75.75 0 0 1 2 8.509V6.25C2 5.56 2.56 5 3.25 5h17.5z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="kptimqc0c"/>`,
		"fallback": "fluent:ticket-24-filled",
	});
}

export default Component;
