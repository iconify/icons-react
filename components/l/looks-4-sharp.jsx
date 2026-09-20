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
		"content": `<style>.iebu0_9tw {
  fill: currentColor;
  d: path("M3 21V3h18v18zm10-4h2V7h-2v4h-2V7H9v6h4z");
}
</style><path class="iebu0_9tw"/>`,
		"fallback": "material-symbols:looks-4-sharp",
	});
}

export default Component;
