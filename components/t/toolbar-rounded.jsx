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
		"content": `<style>.x1uqqybxv {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V9h16v9.385q0 .69-.462 1.153T18.384 20zM4 8V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616V8z");
}
</style><path class="x1uqqybxv"/>`,
		"fallback": "material-symbols-light:toolbar-rounded",
	});
}

export default Component;
