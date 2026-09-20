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
		"content": `<style>.x8opfvnyr {
  fill: currentColor;
  d: path("m4.616 5l1.5 3h3l-1.5-3h2l1.5 3h3l-1.5-3h2l1.5 3h3l-1.5-3h1.769q.69 0 1.153.463T21 6.616v10.769q0 .69-.462 1.153T19.385 19H4.615q-.69 0-1.152-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5");
}
</style><path class="x8opfvnyr"/>`,
		"fallback": "material-symbols-light:movie",
	});
}

export default Component;
