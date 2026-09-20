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
		"content": `<style>.qa1a0wvnu {
  fill: currentColor;
  d: path("M4.616 19q-.667 0-1.141-.475T3 17.386V6.615q0-.666.475-1.14T4.615 5h10.212q.384 0 .727.167t.565.46l4.135 5.385q.342.447.342.988t-.342.989l-4.135 5.384q-.222.294-.565.46t-.727.167z");
}
</style><path class="qa1a0wvnu"/>`,
		"fallback": "material-symbols-light:label-rounded",
	});
}

export default Component;
