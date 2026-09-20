import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t80um-b-c {
  fill: currentColor;
  d: path("M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10m2.104-5.896l-2.25 2.25a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l1.896-1.897a.5.5 0 0 1 .708.708");
}
</style><path class="t80um-b-c"/>`,
		"fallback": "fluent:presence-available-10-filled",
	});
}

export default Component;
