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
		"content": `<style>.uu5ggp4lg {
  fill: currentColor;
  d: path("M7 17.5h10q.214 0 .357-.143T17.5 17t-.143-.357T17 16.5H7q-.213 0-.357.143T6.5 17t.143.357T7 17.5M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="uu5ggp4lg"/>`,
		"fallback": "material-symbols-light:toast-rounded",
	});
}

export default Component;
