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
		"content": `<style>.pv9z4fxcq {
  fill: currentColor;
  d: path("M4.5 3.5a1 1 0 0 0-1 1v2.25a.75.75 0 0 1-1.5 0V4.5A2.5 2.5 0 0 1 4.5 2h2.25a.75.75 0 0 1 0 1.5zm0 13a1 1 0 0 1-1-1v-2.25a.75.75 0 0 0-1.5 0v2.25A2.5 2.5 0 0 0 4.5 18h2.25a.75.75 0 0 0 0-1.5zm12-12a1 1 0 0 0-1-1h-2.25a.75.75 0 0 1 0-1.5h2.25A2.5 2.5 0 0 1 18 4.5v2.25a.75.75 0 0 1-1.5 0zM5.75 6.75A.75.75 0 0 1 6.5 6h7a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V7.5h-2v5h.14c-.299.457-.53.962-.683 1.5H9a.75.75 0 0 1 0-1.5h.25v-5h-2v.25a.75.75 0 0 1-1.5 0zM20 15.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.854-1.854L14.5 16.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708");
}
</style><path class="pv9z4fxcq"/>`,
		"fallback": "fluent:scan-type-checkmark-20-filled",
	});
}

export default Component;
