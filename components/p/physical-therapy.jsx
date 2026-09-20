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
		"content": `<style>.bzhct7_lh {
  fill: currentColor;
  d: path("M16 17H9.375q-.575 0-.937.35t-.438.8t.138.875t.762.625l5.725 2.275q.25.1.488.063t.437-.163t.325-.337T16 21zM12.825 3.175Q14 4.35 14 6t-1.175 2.825T10 10T7.175 8.825T6 6t1.175-2.825T10 2t2.825 1.175m6.4 7.825q.725 0 1.25.488T21 12.7q0 .575-.325 1.05t-.875.675L18 15H9.375q-1.425 0-2.4.975T6 18.375q0 .45.125.863T6.45 20H3v-4q0-2.075 1.463-3.537T8 11z");
}
</style><path class="bzhct7_lh"/>`,
		"fallback": "material-symbols:physical-therapy",
	});
}

export default Component;
