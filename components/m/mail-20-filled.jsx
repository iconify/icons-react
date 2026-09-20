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
		"content": `<style>.coifootzr {
  fill: currentColor;
  d: path("M18 7.373V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.746 4.558a.5.5 0 0 0 .508 0zM15.5 4a2.5 2.5 0 0 1 2.485 2.223L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4z");
}
</style><path class="coifootzr"/>`,
		"fallback": "fluent:mail-20-filled",
	});
}

export default Component;
