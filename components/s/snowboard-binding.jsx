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
		"content": `<style>.vq2mnzb3l {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.75 6.75q0-2.5-2.5-2.5q-2.288 0-2.482 2.095l-.355-.077q-.081-.018-.163-.018q-3.5 0-3.5 3.5v4.5q0 3.5 3.5 3.5q.082 0 .163-.018l.355-.077q.194 2.095 2.482 2.095q2.5 0 2.5-2.5v-.223q1.25-.053 2.5 0v.223q0 2.5 2.5 2.5q2.288 0 2.482-2.095l.355.077q.081.018.163.018q3.5 0 3.5-3.5v-4.5q0-1.45-1.025-2.475T18.75 6.25q-.082 0-.163.018l-.355.077Q18.038 4.25 15.75 4.25q-2.5 0-2.5 2.5v.223q-1.25.053-2.5 0z");
}
</style><path class="vq2mnzb3l"/>`,
		"fallback": "uix-solid:snowboard-binding",
	});
}

export default Component;
