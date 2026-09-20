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
		"content": `<style>.uhzxnac-a {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm10-6h2v-2h2v-2h-2V8h-2v2h-2v2h2z");
}
</style><path class="uhzxnac-a"/>`,
		"fallback": "material-symbols:magnify-fullscreen",
	});
}

export default Component;
