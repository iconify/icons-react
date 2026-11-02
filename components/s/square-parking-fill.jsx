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
		"content": `<style>.xtmz-cc3f {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm6 2v10a1 1 0 0 0 2 0v-3h2a4 4 0 0 0 0-8H9a1 1 0 0 0-1 1m2 5V8h2a1.999 1.999 0 0 1 1.732 3c-.357.619-1.017 1-1.732 1Z");
}
</style><path class="xtmz-cc3f"/>`,
		"fallback": "coolicons:square-parking-fill",
	});
}

export default Component;
