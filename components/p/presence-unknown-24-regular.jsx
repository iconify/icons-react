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
		"content": `<style>.n9ji4x-0t {
  fill: currentColor;
  d: path("M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12");
}
</style><path class="n9ji4x-0t"/>`,
		"fallback": "fluent:presence-unknown-24-regular",
	});
}

export default Component;
