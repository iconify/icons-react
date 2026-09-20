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
		"content": `<style>.dc06xdv1r {
  fill: currentColor;
  d: path("M7.288 23.713Q7 23.425 7 23t.288-.712T8 22t.713.288T9 23t-.288.713T8 24t-.712-.288m4 0Q11 23.426 11 23t.288-.712T12 22t.713.288T13 23t-.288.713T12 24t-.712-.288m4 0Q15 23.426 15 23t.288-.712T16 22t.713.288T17 23t-.288.713T16 24t-.712-.288M11 20v-7.6L6.4 17L5 15.6l5.6-5.6L5 4.4L6.4 3L11 7.6V0h1l5.7 5.7l-4.3 4.3l4.3 4.3L12 20zm2-3.85l1.9-1.85l-1.9-1.9zm0-8.55l1.9-1.9L13 3.85z");
}
</style><path class="dc06xdv1r"/>`,
		"fallback": "material-symbols:settings-bluetooth-outline-sharp",
	});
}

export default Component;
