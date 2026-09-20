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
		"content": `<style>.qw14b7vhw {
  fill: currentColor;
  d: path("M7 14.494v-1H4.5v-1h5v-3H5.27q-.328 0-.549-.221T4.5 8.725V5.264q0-.327.221-.548t.548-.222H7v-1h1v1h2.5v1h-5v3h4.23q.328 0 .549.222q.221.22.221.548v3.461q0 .327-.221.548t-.548.221H8v1zm6.95 5.808l-3.558-3.558l.708-.707l2.85 2.85l5.689-5.689l.707.708z");
}
</style><path class="qw14b7vhw"/>`,
		"fallback": "material-symbols-light:price-check-outline",
	});
}

export default Component;
