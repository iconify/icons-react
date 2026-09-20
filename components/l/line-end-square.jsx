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
		"content": `<style>.ku0eoab9h {
  fill: currentColor;
  d: path("M11 17.5V13H2v-2h9V6.5h11v11z");
}
</style><path class="ku0eoab9h"/>`,
		"fallback": "material-symbols:line-end-square",
	});
}

export default Component;
