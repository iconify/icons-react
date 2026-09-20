import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x80-8ccmn {
  fill: currentColor;
  d: path("M13.5 2a.5.5 0 0 1 0 1h-.262l1.726 4.314A.5.5 0 0 1 15 7.5a2.5 2.5 0 0 1-5 0a.5.5 0 0 1 .036-.186L11.762 3H8.5v8h3a1.5 1.5 0 0 1 0 3h-7a1.5 1.5 0 0 1 0-3h3V3H4.238l1.726 4.314A.5.5 0 0 1 6 7.5a2.5 2.5 0 0 1-5 0a.5.5 0 0 1 .036-.186L2.762 3H2.5a.5.5 0 0 1 0-1zM2.238 7h2.524L3.5 3.845zm9 0h2.524L12.5 3.845z");
}
</style><path class="x80-8ccmn"/>`,
		"fallback": "fluent:scales-16-filled",
	});
}

export default Component;
