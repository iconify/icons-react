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
		"content": `<style>.hag22_0vz {
  fill: currentColor;
  d: path("M5.616 21q-.691 0-1.153-.462T4 19.385V8.615q0-.69.463-1.152T5.616 7H8q0-1.671 1.165-2.835Q10.329 3 12 3t2.836 1.165T16 7h2.385q.69 0 1.152.463T20 8.616v10.769q0 .69-.463 1.153T18.385 21zm9.22-9.164Q16 10.67 16 9h-1q0 1.25-.875 2.125T12 12t-2.125-.875T9 9H8q0 1.671 1.165 2.836Q10.329 13 12 13t2.836-1.164M9 7h6q0-1.25-.875-2.125T12 4t-2.125.875T9 7");
}
</style><path class="hag22_0vz"/>`,
		"fallback": "material-symbols-light:local-mall",
	});
}

export default Component;
