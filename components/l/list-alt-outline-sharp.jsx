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
		"content": `<style>.m5fmf7bpg {
  fill: currentColor;
  d: path("M7 17h2v-2H7zm0-4h2v-2H7zm0-4h2V7H7zm4 8h6v-2h-6zm0-4h6v-2h-6zm0-4h6V7h-6zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="m5fmf7bpg"/>`,
		"fallback": "material-symbols:list-alt-outline-sharp",
	});
}

export default Component;
