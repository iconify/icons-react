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
		"content": `<style>.x2k66j14p {
  fill: currentColor;
  d: path("M18 22q-1.825-.45-2.912-2T14 16.55V14l4-2l4 2v2.55q0 1.9-1.088 3.45T18 22M4 20v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13v3.55q0 .9.188 1.775T12.775 20zm5.175-9.175Q8 9.65 8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12t-2.825-1.175");
}
</style><path class="x2k66j14p"/>`,
		"fallback": "material-symbols:person-shield",
	});
}

export default Component;
