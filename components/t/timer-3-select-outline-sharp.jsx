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
		"content": `<style>.ceu0jq11e {
  fill: currentColor;
  d: path("M4.885 18.116v-1.231h6v-4.27h-6v-1.23h6v-4.27h-6v-1.23h7.23v5.5L11.5 12l.616.616v5.5zm10.23 0v-1h4v-2h-4v-4h5v1h-4v2h4v4z");
}
</style><path class="ceu0jq11e"/>`,
		"fallback": "material-symbols-light:timer-3-select-outline-sharp",
	});
}

export default Component;
