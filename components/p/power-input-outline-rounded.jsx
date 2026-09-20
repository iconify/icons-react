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
		"content": `<style>.ddolqmxza {
  fill: currentColor;
  d: path("M3 15q-.425 0-.712-.288T2 14t.288-.712T3 13h3q.425 0 .713.288T7 14t-.288.713T6 15zm7 0q-.425 0-.712-.288T9 14t.288-.712T10 13h3q.425 0 .713.288T14 14t-.288.713T13 15zm7 0q-.425 0-.712-.288T16 14t.288-.712T17 13h3q.425 0 .713.288T21 14t-.288.713T20 15zM3 11q-.425 0-.712-.288T2 10t.288-.712T3 9h17q.425 0 .713.288T21 10t-.288.713T20 11z");
}
</style><path class="ddolqmxza"/>`,
		"fallback": "material-symbols:power-input-outline-rounded",
	});
}

export default Component;
