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
		"content": `<style>.irhxq-bln {
  fill: currentColor;
  d: path("M2.99 3L3 21h12l6-6V3zM7 8h10v2H7zm5 6H7v-2h5zm2 5.5V14h5.5z");
}
</style><path class="irhxq-bln"/>`,
		"fallback": "ic:sharp-sticky-note-2",
	});
}

export default Component;
