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
		"content": `<style>.efdir9bsc {
  fill: currentColor;
  d: path("M12 3c.265 0 .52.105.707.293l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8A1 1 0 0 1 3 12V4a1 1 0 0 1 1-1ZM7.158 8.221a2 2 0 1 0 3.684 1.558A2 2 0 0 0 7.158 8.22");
}
</style><path class="efdir9bsc"/>`,
		"fallback": "coolicons:tag-fill-sharp",
	});
}

export default Component;
