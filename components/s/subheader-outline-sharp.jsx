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
		"content": `<style>.bpf20z_qq {
  fill: currentColor;
  d: path("M6 10h9V7H6zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="bpf20z_qq"/>`,
		"fallback": "material-symbols:subheader-outline-sharp",
	});
}

export default Component;
