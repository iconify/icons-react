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
		"content": `<style>.td-az0b7l {
  fill: currentColor;
  d: path("M8.713 8.713Q9 8.425 9 8t-.288-.712T8 7t-.712.288T7 8t.288.713T8 9t.713-.288m0 4Q9 12.426 9 12t-.288-.712T8 11t-.712.288T7 12t.288.713T8 13t.713-.288m0 4Q9 16.426 9 16t-.288-.712T8 15t-.712.288T7 16t.288.713T8 17t.713-.288M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h10.175q.4 0 .763.15t.637.425l3.85 3.85q.275.275.425.638t.15.762V19q0 .825-.587 1.413T19 21zM15 5v3q0 .425.288.713T16 9h3z");
}
</style><path class="td-az0b7l"/>`,
		"fallback": "material-symbols:summarize-rounded",
	});
}

export default Component;
