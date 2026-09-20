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
		"content": `<style>.vlhhykc5z {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6zm8-1h6q.425 0 .713-.288T19 16v-4q0-.425-.288-.712T18 11h-6q-.425 0-.712.288T11 12v4q0 .425.288.713T12 17m1-2v-2h4v2z");
}
</style><path class="vlhhykc5z"/>`,
		"fallback": "material-symbols:picture-in-picture-alt-outline-rounded",
	});
}

export default Component;
