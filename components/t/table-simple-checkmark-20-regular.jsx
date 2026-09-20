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
		"content": `<style>.yh1ttrqci {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h3.5v5.5H4zm6.5 3.5V4H14a2 2 0 0 1 2 2v3.5zm-6.5 1h5.5V16H6a2 2 0 0 1-2-2zm10.856 1.396a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.706 0l-.753-.75a.5.5 0 0 1 .706-.708l.4.397l1.396-1.397a.5.5 0 0 1 .707 0");
}
</style><path class="yh1ttrqci"/>`,
		"fallback": "fluent:table-simple-checkmark-20-regular",
	});
}

export default Component;
