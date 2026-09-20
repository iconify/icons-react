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
		"content": `<style>.g2ucxdbdo {
  fill: currentColor;
  d: path("M7.354 8.146a.5.5 0 0 1 0 .708l-.647.646h6.586l-.647-.646a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l.647-.646H6.707l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708 0M17 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3zm-4-2v3c.358 0 .716.127 1 .382V4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2v-3.382A1.5 1.5 0 0 1 13 13v3H7v-3c-.358 0-.716-.127-1-.382V16a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2v3.382A1.5 1.5 0 0 1 7 7V4z");
}
</style><path class="g2ucxdbdo"/>`,
		"fallback": "fluent:table-resize-column-20-regular",
	});
}

export default Component;
