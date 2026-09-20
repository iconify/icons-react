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
		"content": `<style>.p-kn-fbax {
  fill: currentColor;
  d: path("M8.948 18.089q-.211-.161-.31-.41L6.57 12.5H2.04v-1h5.238l2.146 5.446l4.37-10.644q.097-.249.307-.41t.475-.161q.266 0 .477.16q.211.162.31.411L17.47 11.5H22v1h-5.238l-2.185-5.466l-4.37 10.645q-.097.249-.307.41t-.475.161t-.477-.161");
}
</style><path class="p-kn-fbax"/>`,
		"fallback": "material-symbols-light:vital-signs-outline",
	});
}

export default Component;
