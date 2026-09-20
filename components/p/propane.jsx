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
		"content": `<style>.e7z7kobva {
  fill: currentColor;
  d: path("M9.5 7h5v-.577q0-.27-.173-.442q-.173-.173-.442-.173h-3.77q-.269 0-.442.173t-.173.442zM7 19v-2q-2.077 0-3.538-1.457T2 12.005T3.458 8.46T7 7h1.5v-.577q0-.69.463-1.153t1.153-.462h3.769q.69 0 1.153.462t.462 1.153V7H17q2.083 0 3.542 1.457T22 11.995t-1.458 3.544Q19.083 17 17 17v2h-1v-2H8v2z");
}
</style><path class="e7z7kobva"/>`,
		"fallback": "material-symbols-light:propane",
	});
}

export default Component;
