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
		"content": `<style>.tskpz1nxu {
  fill: currentColor;
  d: path("m17 18l-1.4-1.4l4.55-4.6l-4.55-4.6L17 6l6 6zM7 18l-6-6l6-6l1.4 1.4L3.85 12l4.55 4.6zm.288-5.288Q7 12.425 7 12t.288-.712T8 11t.713.288T9 12t-.288.713T8 13t-.712-.288m4 0Q11 12.426 11 12t.288-.712T12 11t.713.288T13 12t-.288.713T12 13t-.712-.288m4 0Q15 12.426 15 12t.288-.712T16 11t.713.288T17 12t-.288.713T16 13t-.712-.288");
}
</style><path class="tskpz1nxu"/>`,
		"fallback": "material-symbols:settings-ethernet",
	});
}

export default Component;
