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
		"content": `<style>.jpaavtb5j {
  fill: currentColor;
  d: path("M6.4 13.4L5 12l7-7l7 7l-1.4 1.4L12 7.825z");
}
</style><path class="jpaavtb5j"/>`,
		"fallback": "material-symbols:keyboard-control-key-outline",
	});
}

export default Component;
