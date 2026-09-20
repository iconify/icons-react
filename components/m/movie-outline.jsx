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
		"content": `<style>.g00-iqbxd {
  fill: currentColor;
  d: path("m4.616 5l1.5 3h3l-1.5-3h2l1.5 3h3l-1.5-3h2l1.5 3h3l-1.5-3h1.769q.69 0 1.153.463T21 6.616v10.769q0 .69-.462 1.153T19.385 19H4.615q-.69 0-1.152-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5M4 9v8.385q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.442V9zm0 0v9z");
}
</style><path class="g00-iqbxd"/>`,
		"fallback": "material-symbols-light:movie-outline",
	});
}

export default Component;
