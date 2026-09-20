import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vcle0eb0t {
  fill: currentColor;
  d: path("M12.25 3a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm0 20.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm-8.5-7a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75m19.75-.75a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-1.5 0zm-3.5-12a.75.75 0 0 1 .75-.75h.5A3.75 3.75 0 0 1 25 6.75v.5a.75.75 0 0 1-1.5 0v-.5a2.25 2.25 0 0 0-2.25-2.25h-.5a.75.75 0 0 1-.75-.75M20.75 25a.75.75 0 0 1 0-1.5h.5a2.25 2.25 0 0 0 2.25-2.25v-.5a.75.75 0 0 1 1.5 0v.5A3.75 3.75 0 0 1 21.25 25zM8 3.75A.75.75 0 0 0 7.25 3h-.5A3.75 3.75 0 0 0 3 6.75v.5a.75.75 0 0 0 1.5 0v-.5A2.25 2.25 0 0 1 6.75 4.5h.5A.75.75 0 0 0 8 3.75M7.25 25a.75.75 0 0 0 0-1.5h-.5a2.25 2.25 0 0 1-2.25-2.25v-.5a.75.75 0 0 0-1.5 0v.5A3.75 3.75 0 0 0 6.75 25z");
}
</style><path class="vcle0eb0t"/>`,
		"fallback": "fluent:square-hint-28-regular",
	});
}

export default Component;
