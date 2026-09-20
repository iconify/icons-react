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
		"content": `<style>.spu0rnuec {
  fill: currentColor;
  d: path("M2 18V6h12v12zm2-2h8V8H4zm12-8V6h2v2zm0 10v-2h2v2zm4-10V6h2v2zm0 5v-2h2v2zm0 5v-2h2v2zM8 12");
}
</style><path class="spu0rnuec"/>`,
		"fallback": "material-symbols:move-selection-left-outline",
	});
}

export default Component;
