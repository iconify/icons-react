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
		"content": `<style>.r4oxorb7b {
  fill: currentColor;
  d: path("M12.562 9.057a1.5 1.5 0 0 0-2.121-2.122L6.437 10.94a1.5 1.5 0 0 0 0 2.12l4.004 4.005a1.5 1.5 0 0 0 2.121-2.121L11.12 13.5h5.38a1.5 1.5 0 1 0 0-3h-5.38zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0");
}
</style><path class="r4oxorb7b"/>`,
		"fallback": "fluent:presence-oof-24-regular",
	});
}

export default Component;
