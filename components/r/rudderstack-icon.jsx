import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":258};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rg155fb3o {
  d: path("M256 0H0c0 136.177 106.017 248.816 241.945 257.057l14.055.852z");
}
</style><path class="rg155fb3o"/>`,
		"fallback": "logos:rudderstack-icon",
	});
}

export default Component;
