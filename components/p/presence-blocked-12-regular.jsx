import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xklsbgbho {
  fill: currentColor;
  d: path("M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0m-1.5 0a4.5 4.5 0 0 0-.832-2.607L3.393 9.668A4.5 4.5 0 0 0 10.5 6M8.607 2.332a4.5 4.5 0 0 0-6.275 6.275z");
}
</style><path class="xklsbgbho"/>`,
		"fallback": "fluent:presence-blocked-12-regular",
	});
}

export default Component;
