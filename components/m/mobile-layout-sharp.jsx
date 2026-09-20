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
		"content": `<style>.zukts29ki {
  fill: currentColor;
  d: path("M1 21v-6h10v6zm12 0V3h10v18zm5-3q.425 0 .713-.288T19 17t-.288-.712T18 16t-.712.288T17 17t.288.713T18 18M1 13V3h10v10zm6-5q.425 0 .713-.288T8 7t-.288-.712T7 6t-.712.288T6 7t.288.713T7 8m-4.25 3h4.5L5 8z");
}
</style><path class="zukts29ki"/>`,
		"fallback": "material-symbols:mobile-layout-sharp",
	});
}

export default Component;
