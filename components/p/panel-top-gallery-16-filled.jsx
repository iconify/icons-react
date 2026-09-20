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
		"content": `<style>.nbcmbibfr {
  fill: currentColor;
  d: path("M5 3h-.5A2.5 2.5 0 0 0 2 5.5v5A2.5 2.5 0 0 0 4.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 11.5 3H11v4h2v3.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 10.5V7h2zm1 4h4V3H6z");
}
</style><path class="nbcmbibfr"/>`,
		"fallback": "fluent:panel-top-gallery-16-filled",
	});
}

export default Component;
