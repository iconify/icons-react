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
		"content": `<style>.sc8s4pb9n {
  fill: currentColor;
  d: path("M6.533 12.356a1.47 1.47 0 0 0-.465 1.581C3.495 13.581 2 11.767 2 10v-.5A1.5 1.5 0 0 1 3.5 8h4.534a4 4 0 0 0-.535 2v1.537zM7 1.5A2.75 2.75 0 1 1 7 7a2.75 2.75 0 0 1 0-5.5M8.5 10a3 3 0 0 1 6 0v2l1.32 1.119a.5.5 0 0 1-.324.881H7.503a.5.5 0 0 1-.323-.881L8.5 12zm3 6a1.5 1.5 0 0 1-1.415-1h2.829a1.5 1.5 0 0 1-1.415 1");
}
</style><path class="sc8s4pb9n"/>`,
		"fallback": "fluent:person-alert-16-filled",
	});
}

export default Component;
