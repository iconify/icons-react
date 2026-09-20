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
		"content": `<style>.zc8qu2b_c {
  fill: currentColor;
  d: path("M4.616 19q-.667 0-1.141-.475T3 17.386V6.615q0-.666.475-1.14T4.615 5h10.212q.384 0 .727.167t.565.46L21 12l-4.88 6.373q-.223.294-.566.46t-.727.167z");
}
</style><path class="zc8qu2b_c"/>`,
		"fallback": "material-symbols-light:label",
	});
}

export default Component;
