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
		"content": `<style>.rx_4qo46g {
  fill: currentColor;
  d: path("M18.825 14.825Q20 13.65 20 12t-1.175-2.825T16 8t-2.825 1.175T12 12t1.175 2.825T16 16t2.825-1.175M16 18q-2.25 0-3.912-1.425T10.075 13H2v-2h8.075q.35-2.15 2.013-3.575T16 6q2.5 0 4.25 1.75T22 12t-1.75 4.25T16 18m0-6");
}
</style><path class="rx_4qo46g"/>`,
		"fallback": "material-symbols:line-end-circle-outline",
	});
}

export default Component;
