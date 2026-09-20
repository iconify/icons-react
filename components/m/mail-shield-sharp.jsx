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
		"content": `<style>.z08a5lkle {
  fill: currentColor;
  d: path("M3 19V5h18v7.121l-2.308-1.173L13 13.833v3.582q0 .42.052.811t.137.774zm15.692 3q-1.494-.367-2.4-1.68t-.908-2.904v-2.127l3.308-1.673L22 15.288v2.127q0 1.593-.907 2.905t-2.4 1.68m0-1.004q1.086-.367 1.706-1.379t.62-2.202v-1.53l-2.327-1.154zM12 12.116l8-5.231L19.692 6L12 11L4.308 6L4 6.885z");
}
</style><path class="z08a5lkle"/>`,
		"fallback": "material-symbols-light:mail-shield-sharp",
	});
}

export default Component;
