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
		"content": `<style>.bj9r3dbgh {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h2.1a5.5 5.5 0 0 1-.578-3H5.5a.5.5 0 0 1 0-1h.707a5.5 5.5 0 0 1 .682-1.5H5.5a.5.5 0 0 1 0-1h2.225A5.48 5.48 0 0 1 11.5 6c.9 0 1.75.216 2.5.6V4.5A2.5 2.5 0 0 0 11.5 2zm1 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M16 11.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.854-1.854L10.5 12.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708");
}
</style><path class="bj9r3dbgh"/>`,
		"fallback": "fluent:textbox-checkmark-16-filled",
	});
}

export default Component;
