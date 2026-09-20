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
		"content": `<style>.eqndvbb4s {
  fill: currentColor;
  d: path("M8 7q-.425 0-.712-.288T7 6t.288-.712T8 5h3V3q0-.425.288-.712T12 2t.713.288T13 3v2h3q.425 0 .713.288T17 6t-.288.713T16 7zm1 15q-.825 0-1.412-.587T7 20v-2h4q.425 0 .713-.288T12 17t-.288-.712T11 16H7v-2h4q.425 0 .713-.288T12 13t-.288-.712T11 12H7v-1q0-1.25.875-2.125T10 8h4q1.25 0 2.125.875T17 11v9q0 .825-.587 1.413T15 22z");
}
</style><path class="eqndvbb4s"/>`,
		"fallback": "material-symbols:pediatrics",
	});
}

export default Component;
