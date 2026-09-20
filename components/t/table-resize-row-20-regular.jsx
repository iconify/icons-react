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
		"content": `<style>.boktohhbp {
  fill: currentColor;
  d: path("M11.854 7.354a.5.5 0 0 1-.708 0l-.646-.647v6.586l.646-.647a.5.5 0 0 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708l.646.647V6.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1 0 .708M14 17a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3zm2-4h-3c0 .358-.127.716-.382 1H16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2h3.382A1.5 1.5 0 0 1 7 13H4V7h3c0-.358.127-.716.382-1H4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2h-3.382c.255.284.382.642.382 1h3z");
}
</style><path class="boktohhbp"/>`,
		"fallback": "fluent:table-resize-row-20-regular",
	});
}

export default Component;
