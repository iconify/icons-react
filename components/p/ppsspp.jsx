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
		"content": `<style>.brshmccbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.94 8.47a.6.6 0 0 0-.43.74l2.13 8a.6.6 0 0 0 .28.36l7 4.11a.6.6 0 0 0 .82-.21l4-7.06a.6.6 0 0 0 .06-.46L25.69 6a.61.61 0 0 0-.69-.48L19.44 7Zm25.59 5.47a.6.6 0 0 0-.74-.43l-7.95 2.13a.6.6 0 0 0-.36.28l-4.11 7a.6.6 0 0 0 .21.82l7.06 4a.6.6 0 0 0 .46.06l7.94-2.13a.61.61 0 0 0 .43-.74L41 19.44Zm-5.47 25.59a.6.6 0 0 0 .43-.74l-2.13-7.95a.6.6 0 0 0-.28-.36l-7-4.11a.6.6 0 0 0-.82.21l-4 7.06a.6.6 0 0 0-.06.46l2.13 7.94a.61.61 0 0 0 .74.43L28.56 41ZM8.47 34.06a.6.6 0 0 0 .74.43l8-2.13a.6.6 0 0 0 .36-.28l4.11-7a.6.6 0 0 0-.21-.82l-7.06-4a.6.6 0 0 0-.46-.06L6 22.31a.61.61 0 0 0-.43.74L7 28.56Z");
}
</style><path class="brshmccbv"/>`,
		"fallback": "arcticons:ppsspp",
	});
}

export default Component;
