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
		"content": `<style>.vhurp0esm {
  fill: currentColor;
  d: path("m10.575 19.575l-9.05-9.05q-.3-.3-.45-.675t-.15-.75q0-.425.175-.812t.525-.688Q3.675 5.825 6.5 4.913T12 4t5.5.913T22.375 7.6q.35.3.525.688t.175.812q0 .375-.15.75t-.45.675l-9.05 9.05q-.3.3-.675.45t-.75.15t-.75-.15t-.675-.45M12 18.15l9.1-9.1q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05zM11 14q0 .425.288.713T12 15t.713-.288T13 14v-3q0-.425-.288-.712T12 10t-.712.288T11 11zm1.713-5.287Q13 8.425 13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9t.713-.288M12 18.15");
}
</style><path class="vhurp0esm"/>`,
		"fallback": "material-symbols:perm-scan-wifi-outline-rounded",
	});
}

export default Component;
