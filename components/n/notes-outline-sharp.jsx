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
		"content": `<style>.c_eqm4hkc {
  fill: currentColor;
  d: path("M3 18v-2h12v2zm0-5v-2h18v2zm0-5V6h18v2z");
}
</style><path class="c_eqm4hkc"/>`,
		"fallback": "material-symbols:notes-outline-sharp",
	});
}

export default Component;
