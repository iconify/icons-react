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
		"content": `<style>.eocp1pbhi {
  fill: currentColor;
  d: path("M13 5c1.039 0 1.992.578 2.707 1.293l4 4a2.414 2.414 0 0 1 0 3.414l-4 4C14.992 18.422 14.039 19 13 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z");
}
</style><path class="eocp1pbhi"/>`,
		"fallback": "coolicons:label-fill",
	});
}

export default Component;
