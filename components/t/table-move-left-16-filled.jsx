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
		"content": `<style>.y0zpkqgbl {
  fill: currentColor;
  d: path("M2 13.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zM6 5V2.5a.5.5 0 0 1 .5-.5H10v3zm.5 9a.5.5 0 0 1-.5-.5V11h4v3zm3.5-4H7.415q.085-.243.085-.5a1.5 1.5 0 1 0 0-3q0-.257-.085-.5H10zm1 1v3h.5a2.5 2.5 0 0 0 2.5-2.5V11zm3-5h-3v4h3zm0-1.5V5h-3V2h.5A2.5 2.5 0 0 1 14 4.5M6.354 6.146a.5.5 0 0 1 0 .708l-.647.646H7.5a.5.5 0 0 1 0 1H5.707l.647.646a.5.5 0 1 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708 0");
}
</style><path class="y0zpkqgbl"/>`,
		"fallback": "fluent:table-move-left-16-filled",
	});
}

export default Component;
