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
		"content": `<style>.ndwmkq6-a {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm10-8v1q0 .425.288.713T15 14t.713-.288T16 13v-1h1q.425 0 .713-.288T18 11t-.288-.712T17 10h-1V9q0-.425-.288-.712T15 8t-.712.288T14 9v1h-1q-.425 0-.712.288T12 11t.288.713T13 12z");
}
</style><path class="ndwmkq6-a"/>`,
		"fallback": "material-symbols:magnify-fullscreen-rounded",
	});
}

export default Component;
