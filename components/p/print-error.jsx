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
		"content": `<style>.uj8lg7fuj {
  fill: currentColor;
  d: path("M6 21v-4H2v-6q0-1.275.875-2.137T5 8h14q1 0 1.763.563T21.825 10H18q-.825 0-1.412.588T16 12v3H8v4h8v2zM6 7V3h12v4zm12.288 13.713Q18 20.425 18 20t.288-.712T19 19t.713.288T20 20t-.288.713T19 21t-.712-.288M18 17v-5h2v5z");
}
</style><path class="uj8lg7fuj"/>`,
		"fallback": "material-symbols:print-error",
	});
}

export default Component;
