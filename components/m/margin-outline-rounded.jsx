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
		"content": `<style>.i43p-dt9d {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm3.713 3.713Q9 8.425 9 8t-.288-.712T8 7t-.712.288T7 8t.288.713T8 9t.713-.288M12 9q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m4.713-.288Q17 8.426 17 8t-.288-.712T16 7t-.712.288T15 8t.288.713T16 9t.713-.288m0 4Q17 12.426 17 12t-.288-.712T16 11t-.712.288T15 12t.288.713T16 13t.713-.288M12 13q.425 0 .713-.288T13 12t-.288-.712T12 11t-.712.288T11 12t.288.713T12 13m-3.287-.288Q9 12.426 9 12t-.288-.712T8 11t-.712.288T7 12t.288.713T8 13t.713-.288");
}
</style><path class="i43p-dt9d"/>`,
		"fallback": "material-symbols:margin-outline-rounded",
	});
}

export default Component;
