import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.laobtst-e {
  fill: currentColor;
  d: path("M25.5 4A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 23.5v-15A4.5 4.5 0 0 1 6.5 4zm-19 2A2.5 2.5 0 0 0 4 8.5v15A2.5 2.5 0 0 0 6.5 26h19a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 25.5 6zM19 20a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm3-5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm-6-5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z");
}
</style><path class="laobtst-e"/>`,
		"fallback": "fluent:slide-text-32-regular",
	});
}

export default Component;
