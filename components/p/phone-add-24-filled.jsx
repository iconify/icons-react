import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z2t8d4b3m {
  fill: currentColor;
  d: path("M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11M13.75 2A2.25 2.25 0 0 1 16 4.25v6.924a6.5 6.5 0 0 0-5 6.326H8.75a.75.75 0 0 0 0 1.5h2.424a6.5 6.5 0 0 0 1.636 3H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2zm3.75 12l-.09.007a.5.5 0 0 0-.402.402L17 14.5V17h-2.502l-.09.008a.5.5 0 0 0-.402.402l-.008.09l.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.503l.008.09a.5.5 0 0 0 .402.402l.09.008l.09-.008a.5.5 0 0 0 .402-.402l.008-.09V18l2.504.001l.09-.008a.5.5 0 0 0 .402-.402l.008-.09l-.008-.09a.5.5 0 0 0-.403-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403z");
}
</style><path class="z2t8d4b3m"/>`,
		"fallback": "fluent:phone-add-24-filled",
	});
}

export default Component;
