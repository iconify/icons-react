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
		"content": `<style>.r2aji9boz {
  fill: currentColor;
  d: path("M14.241 9.763Q13 8.525 13 6.769t1.241-2.993t2.99-1.238t2.99 1.238q1.24 1.237 1.24 2.993t-1.24 2.994T17.23 11t-2.99-1.237m-9.18 9.176q-.24-.237-.381-.54q-.141-.301-.141-.63V5.923q0-.698.499-1.195t1.2-.497h5.693q-.312.568-.467 1.211t-.156 1.32q0 1.251.473 2.322t1.269 1.866zm7.093.523v-4.593q0-.88.55-1.581q.552-.701 1.404-.907q.76-.162 1.54-.242t1.583-.081q.678 0 1.303.043t1.235.168v5.5q0 .698-.497 1.196q-.497.497-1.195.497z");
}
</style><path class="r2aji9boz"/>`,
		"fallback": "material-symbols-light:streetview-rounded",
	});
}

export default Component;
