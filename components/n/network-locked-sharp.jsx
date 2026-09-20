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
		"content": `<style>.xspokgfgx {
  fill: currentColor;
  d: path("M17 22v-5h1v-1q0-.825.588-1.412T20 14t1.413.588T22 16v1h1v5zm2-5h2v-1q0-.425-.288-.712T20 15t-.712.288T19 16zM2 22L22 2v10h-2q-2.075 0-3.537 1.463T15 17v5z");
}
</style><path class="xspokgfgx"/>`,
		"fallback": "material-symbols:network-locked-sharp",
	});
}

export default Component;
