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
		"content": `<style>.aasgs5bdw {
  fill: currentColor;
  d: path("M7.5 7.5V2h-3A2.5 2.5 0 0 0 2 4.5v3zm1 0H14v-3A2.5 2.5 0 0 0 11.5 2h-3zm5.5 1H2v3A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5z");
}
</style><path class="aasgs5bdw"/>`,
		"fallback": "fluent:layout-row-two-split-top-16-filled",
	});
}

export default Component;
