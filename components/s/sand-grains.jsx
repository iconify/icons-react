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
		"content": `<style>.y627cydao {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 4Q9 4 9 6.5T12 9t3-2.5T12 4m-6.5 8.5q0-1.092.948-1.83q.862-.671 2.052-.671t2.052.671q.949.738.948 1.83q.001 1.092-.948 1.83q-.862.671-2.052.671t-2.052-.671Q5.5 13.592 5.5 12.5m10-2.5q-3 0-3 2.5t3 2.5t3-2.5t-3-2.5M2 18.5Q2 16 5 16t3 2.5T5 21t-3-2.5m14 0q0-2.5 3-2.5t3 2.5t-3 2.5t-3-2.5M12 16q-3 0-3 2.5t3 2.5t3-2.5t-3-2.5");
}
</style><path class="y627cydao"/>`,
		"fallback": "uix-solid:sand-grains",
	});
}

export default Component;
