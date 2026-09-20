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
		"content": `<style>.jpun04ryu {
  fill: currentColor;
  d: path("m17.267 16l.714-.713L13.669 11h3.312v-1h-5v5h1v-3.286zM3 8.846V5h5.846v3.846zm0 2.385h8.23V5h8.155q.69 0 1.153.463T21 6.616v10.769q0 .69-.462 1.153T19.385 19H4.615q-.69 0-1.152-.462T3 17.384z");
}
</style><path class="jpun04ryu"/>`,
		"fallback": "material-symbols-light:pip-exit",
	});
}

export default Component;
