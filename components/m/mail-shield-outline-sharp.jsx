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
		"content": `<style>.lgq8iqpgr {
  fill: currentColor;
  d: path("m12 11l7.692-5H4.308zm1.17 8H3V5h18v7.121l-1-.519V6.885l-8 5.23l-8-5.23V18h9.006l.058.503q.027.247.105.497m5.523 3q-1.494-.367-2.4-1.68t-.908-2.904v-2.127l3.308-1.673L22 15.288v2.127q0 1.593-.907 2.905t-2.4 1.68m0-1.004q1.086-.367 1.706-1.379t.62-2.202v-1.53l-2.327-1.154zM4 18v-7.052v.654V6z");
}
</style><path class="lgq8iqpgr"/>`,
		"fallback": "material-symbols-light:mail-shield-outline-sharp",
	});
}

export default Component;
