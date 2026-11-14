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
		"content": `<style>.z8y7l_bvw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.5 6.75q0-3 4.5-3q1.761 0 3.038.766Q16.5 5.393 16.5 6.75q0 1.097-.956 1.88q2.706.732 2.706 2.87q0 1.414-1.183 2.213q3.683.854 3.683 3.287q0 3.75-8.75 3.75T3.25 17q0-2.433 3.683-3.287Q5.75 12.914 5.75 11.5q0-2.052 2.492-2.808Q7.5 7.968 7.5 6.75");
}
</style><path class="z8y7l_bvw"/>`,
		"fallback": "uix-solid:rock-garden",
	});
}

export default Component;
