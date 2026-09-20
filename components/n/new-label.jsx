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
		"content": `<style>.i19ue8b3w {
  fill: currentColor;
  d: path("M11.2 20q.4-.675.6-1.437T12 17q0-2.5-1.75-4.25T6 11q-1.125 0-2.15.4T2 12.525V6q0-.825.588-1.412T4 4h11q.475 0 .9.213t.7.587L22 12l-5.4 7.2q-.275.375-.7.588T15 20zM5 21v-3H2v-2h3v-3h2v3h3v2H7v3z");
}
</style><path class="i19ue8b3w"/>`,
		"fallback": "material-symbols:new-label",
	});
}

export default Component;
