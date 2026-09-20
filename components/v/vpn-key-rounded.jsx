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
		"content": `<style>.cizj2mblg {
  fill: currentColor;
  d: path("M7 17q-2.083 0-3.542-1.457T2 12.005T3.458 8.46Q4.917 7 7 7q1.833 0 3.134 1.09q1.3 1.089 1.708 2.68h8.927q.508 0 .87.36T22 12q0 .535-.365.883q-.366.348-.866.348h-1.115v2.154q0 .507-.362.869q-.361.361-.869.361t-.87-.361q-.36-.362-.36-.87v-2.153h-5.35q-.409 1.59-1.71 2.68Q8.834 17 7 17m0-3.77q.508 0 .87-.36t.36-.87t-.36-.87t-.87-.36t-.87.36t-.36.87t.36.87t.87.36");
}
</style><path class="cizj2mblg"/>`,
		"fallback": "material-symbols-light:vpn-key-rounded",
	});
}

export default Component;
