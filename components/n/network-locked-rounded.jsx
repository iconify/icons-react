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
		"content": `<style>.u3cvm7g5w {
  fill: currentColor;
  d: path("M17.85 22q-.35 0-.6-.25t-.25-.6v-3.3q0-.35.25-.6t.6-.25H18v-1q0-.825.588-1.412T20 14t1.413.588T22 16v1h.15q.35 0 .6.25t.25.6v3.3q0 .35-.25.6t-.6.25zM19 17h2v-1q0-.425-.288-.712T20 15t-.712.288T19 16zM4.425 22q-.675 0-.937-.612T3.7 20.3L20.3 3.7q.475-.475 1.088-.213t.612.938V11q0 .425-.288.713T21 12h-1q-2.075 0-3.537 1.463T15 17v4q0 .425-.288.713T14 22z");
}
</style><path class="u3cvm7g5w"/>`,
		"fallback": "material-symbols:network-locked-rounded",
	});
}

export default Component;
