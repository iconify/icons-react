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
		"content": `<style>.g0580jb_i {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v3h12v-3A2.5 2.5 0 0 0 11.5 2zM14 8.5H8.5V14h3a2.5 2.5 0 0 0 2.5-2.5zm-6.5 0H2v3A2.5 2.5 0 0 0 4.5 14h3z");
}
</style><path class="g0580jb_i"/>`,
		"fallback": "fluent:layout-row-two-split-bottom-16-filled",
	});
}

export default Component;
