import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bac1_ab3j {
  fill: currentColor;
  d: path("M2.004 11.75A3.75 3.75 0 0 1 5.754 8H22.25A3.75 3.75 0 0 1 26 11.75v4.5A3.75 3.75 0 0 1 22.25 20H5.755a3.75 3.75 0 0 1-3.75-3.75zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25v4.5a2.25 2.25 0 0 0 2.25 2.25H22.25a2.25 2.25 0 0 0 2.25-2.25v-4.5a2.25 2.25 0 0 0-2.25-2.25zm12.996 3a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m2.75 1.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5");
}
</style><path class="bac1_ab3j"/>`,
		"fallback": "fluent:storage-28-regular",
	});
}

export default Component;
