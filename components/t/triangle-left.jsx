import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fuofjmbmx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.002 10L14 14.037V5.963zm-2.5-.866a1 1 0 0 0 0 1.732l9.998 5.769a1 1 0 0 0 1.5-.866V4.23a1 1 0 0 0-1.5-.866z");
}
</style><path clip-rule="evenodd" class="fuofjmbmx"/>`,
		"fallback": "pepicons-pop:triangle-left",
	});
}

export default Component;
