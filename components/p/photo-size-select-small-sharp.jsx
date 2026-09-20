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
		"content": `<style>.scomcabpt {
  fill: currentColor;
  d: path("M3 21V11h10v10zm12 0v-2h2v2zM4 19h8l-2.6-3.5L7.5 18l-1.4-1.85zm15-2v-2h2v2zm0-4v-2h2v2zM3 9V7h2v2zm16 0V7h2v2zM7 5V3h2v2zm4 0V3h2v2zm4 0V3h2v2zM3 5V3h2v2zm18 0h-2V3h2zm-2 16v-2h2v2z");
}
</style><path class="scomcabpt"/>`,
		"fallback": "material-symbols:photo-size-select-small-sharp",
	});
}

export default Component;
