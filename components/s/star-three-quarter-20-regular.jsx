import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.btv0vz7qp {
  fill: currentColor;
  d: path("m10.898 2.9l1.93 3.91l4.317.628a1 1 0 0 1 .554 1.706l-3.124 3.044l.738 4.3a1 1 0 0 1-1.451 1.054l-3.86-2.03l-3.862 2.03a1 1 0 0 1-1.45-1.055l.737-4.299l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627l1.93-3.912a1 1 0 0 1 1.794 0m1.104 4.474v8.06l2.325 1.223l-.737-4.3a1 1 0 0 1 .287-.885l3.124-3.044l-4.317-.628a1 1 0 0 1-.682-.426");
}
</style><path class="btv0vz7qp"/>`,
		"fallback": "fluent:star-three-quarter-20-regular",
	});
}

export default Component;
