import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e_m6xmzcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m3.5 31.422l41-9.778H19.523s-.942 4.359-16.023 9.778m29.135-6.948a51 51 0 0 1-6.146 6.948H3.5m16.023-9.778c-1.178-1.768-4.713-3.888-8.6-5.066h23.68a2.47 2.47 0 0 1 .81 2.061a6.95 6.95 0 0 1-.976 3.005");
}
</style><path class="e_m6xmzcg"/>`,
		"fallback": "arcticons:la-poste-mobile",
	});
}

export default Component;
