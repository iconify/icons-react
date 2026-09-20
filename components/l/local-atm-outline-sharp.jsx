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
		"content": `<style>.js8_i5eoq {
  fill: currentColor;
  d: path("M11.5 16.5h1v-1h1.23q.328 0 .549-.221t.221-.548v-2.462q0-.327-.221-.548t-.548-.221H10.5v-2h4v-1h-2v-1h-1v1h-1.23q-.328 0-.549.221T9.5 9.27v2.462q0 .327.221.548t.548.221H13.5v2h-4v1h2zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="js8_i5eoq"/>`,
		"fallback": "material-symbols-light:local-atm-outline-sharp",
	});
}

export default Component;
