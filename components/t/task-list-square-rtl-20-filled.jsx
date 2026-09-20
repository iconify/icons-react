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
		"content": `<style>.t3r2-sbob {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm11.354 1.104a.5.5 0 1 0-.707-.708l-1.413 1.412l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.016zm0 4.292a.5.5 0 0 0-.707 0l-1.413 1.412l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.015l1.75-1.75a.5.5 0 0 0 0-.707M6.5 12a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1zM6 7.5a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 0-1H6.5a.5.5 0 0 0-.5.5");
}
</style><path class="t3r2-sbob"/>`,
		"fallback": "fluent:task-list-square-rtl-20-filled",
	});
}

export default Component;
