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
		"content": `<style>.tr48w-lul {
  fill: currentColor;
  d: path("M11 5V3h2v2zm0 16v-2h2v2zM7 5V3h2v2zm0 16v-2h2v2zM3 5V3h2v2zm0 4V7h2v2zm0 4v-2h2v2zm0 4v-2h2v2zm0 4v-2h2v2zm12 0v-2h2V5h-2V3h6v2h-2v14h2v2z");
}
</style><path class="tr48w-lul"/>`,
		"fallback": "material-symbols:text-select-end-sharp",
	});
}

export default Component;
