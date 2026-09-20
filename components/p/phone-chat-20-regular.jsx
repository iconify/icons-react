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
		"content": `<style>.bug8-ib0t {
  fill: currentColor;
  d: path("M9.421 17H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5.022a5.6 5.6 0 0 1 1 0V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2.117zm5.079 2a4.5 4.5 0 1 0-3.937-2.318l-.544 1.789a.41.41 0 0 0 .51.51l1.79-.544A4.5 4.5 0 0 0 14.5 19M12 13.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1z");
}
</style><path class="bug8-ib0t"/>`,
		"fallback": "fluent:phone-chat-20-regular",
	});
}

export default Component;
