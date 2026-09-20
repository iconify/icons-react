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
		"content": `<style>.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.ulzgpk5be {
  d: path("m17.648 5.261l-7.045 6a1 1 0 0 1-1.301-.004l-6.955-6C1.645 4.652 2.073 3.5 3 3.5h14c.93 0 1.356 1.158.648 1.761M5.69 5.5l4.27 3.683L14.282 5.5z");
}

.wvtcptg5b {
  d: path("M17 3.5H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-13 11v-9h12v9z");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="wvtcptg5b"/><path class="ulzgpk5be"/></g>`,
		"fallback": "pepicons-pop:letter",
	});
}

export default Component;
