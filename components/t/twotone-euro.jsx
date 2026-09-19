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
		"content": `<style>.bocpfsbxb {
  fill: currentColor;
  d: path("M15 18.5A6.48 6.48 0 0 1 9.24 15H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24A6.49 6.49 0 0 1 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.96 8.96 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06a8.3 8.3 0 0 0 0 2H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6c2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57");
}
</style><path class="bocpfsbxb"/>`,
		"fallback": "ic:twotone-euro",
	});
}

export default Component;
