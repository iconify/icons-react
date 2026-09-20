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
		"content": `<style>.jt4e-oebs {
  fill: currentColor;
  d: path("M2 22L22 2v20z");
}
</style><path class="jt4e-oebs"/>`,
		"fallback": "material-symbols:signal-cellular-4-bar-sharp",
	});
}

export default Component;
