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
		"content": `<style>.to21_vdpc {
  fill: currentColor;
  d: path("M4 22V6h4q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h4v16zm6-16h4q0-.825-.587-1.412T12 4t-1.412.588T10 6m-2 5h2V8H8zm6 0h2V8h-2z");
}
</style><path class="to21_vdpc"/>`,
		"fallback": "material-symbols:shopping-bag-sharp",
	});
}

export default Component;
