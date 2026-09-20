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
		"content": `<style>.bx5pwg-0k {
  fill: currentColor;
  d: path("M5.48 16.496q0-.843.591-1.425l9-9q.582-.59 1.425-.59t1.433.59t.59 1.433t-.59 1.425l-9 9q-.582.59-1.425.59t-1.433-.59t-.59-1.433");
}
</style><path class="bx5pwg-0k"/>`,
		"fallback": "material-symbols-light:pen-size-4-outline",
	});
}

export default Component;
