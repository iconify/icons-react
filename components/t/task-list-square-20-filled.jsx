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
		"content": `<style>.f0eiwzbpx {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm6.354 1.104a.5.5 0 0 0-.708-.708L7.234 7.808l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.016zm0 4.292a.5.5 0 0 0-.708 0l-1.412 1.412l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.015l1.75-1.75a.5.5 0 0 0 0-.707M11 12a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1zm-.5-4.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 0-1H11a.5.5 0 0 0-.5.5");
}
</style><path class="f0eiwzbpx"/>`,
		"fallback": "fluent:task-list-square-20-filled",
	});
}

export default Component;
