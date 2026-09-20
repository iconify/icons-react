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
		"content": `<style>.wr4c4xbqx {
  fill: currentColor;
  d: path("M4 5V3h16v2z");
}
</style><path class="wr4c4xbqx"/>`,
		"fallback": "material-symbols:maximize-outline",
	});
}

export default Component;
