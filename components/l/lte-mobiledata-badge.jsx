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
		"content": `<style>.z9kb1dlje {
  fill: currentColor;
  d: path("M3.616 20q-.691 0-1.153-.462T2 18.384V5.616q0-.691.463-1.153T3.616 4h16.769q.69 0 1.153.463T22 5.616v12.769q0 .69-.462 1.153T20.385 20zm1.538-4.5h4v-1h-3v-6h-1zm5.577 0h1v-6h2v-1h-5v1h2zm4.769 0h4v-1h-3v-2h2v-1h-2v-2h3v-1h-4z");
}
</style><path class="z9kb1dlje"/>`,
		"fallback": "material-symbols-light:lte-mobiledata-badge",
	});
}

export default Component;
