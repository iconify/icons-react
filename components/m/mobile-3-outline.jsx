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
		"content": `<style>.o0cc32gyt {
  fill: currentColor;
  d: path("M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v3.1q.45.175.725.55T20 7.5v2q0 .475-.275.85T19 10.9V21q0 .825-.587 1.413T17 23zm0-2h10V3H7zm0 0V3zm3-1h4q.425 0 .713-.288T15 19t-.288-.712T14 18h-4q-.425 0-.712.288T9 19t.288.713T10 20");
}
</style><path class="o0cc32gyt"/>`,
		"fallback": "material-symbols:mobile-3-outline",
	});
}

export default Component;
