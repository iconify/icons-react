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
		"content": `<style>.gf_6gj9cl {
  fill: currentColor;
  d: path("M9.5 7.5v9l7-4.5z");
}

.xo4-747so {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14.01H4V5.99h16z");
}
</style><path class="gf_6gj9cl"/><path class="xo4-747so"/>`,
		"fallback": "ic:outline-smart-display",
	});
}

export default Component;
