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
		"content": `<style>.yc88e0l9j {
  fill: currentColor;
  d: path("M4 20V4h16v16zm7.462-3.5H12.5l2-7.936V7.5h-5v1h3.962z");
}
</style><path class="yc88e0l9j"/>`,
		"fallback": "material-symbols-light:looks-7-sharp",
	});
}

export default Component;
