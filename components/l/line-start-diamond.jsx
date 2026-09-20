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
		"content": `<style>.p454zibvy {
  fill: currentColor;
  d: path("m9 19l-7-7l7-7l6 6h7v2h-7z");
}
</style><path class="p454zibvy"/>`,
		"fallback": "material-symbols:line-start-diamond",
	});
}

export default Component;
