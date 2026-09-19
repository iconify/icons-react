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
		"content": `<style>.m2_97d_cb {
  fill: currentColor;
  d: path("M14 2H4v20h16V8zm1.04 17.45l-1.88-1.88c-1.33.71-3.01.53-4.13-.59a3.495 3.495 0 0 1 0-4.95a3.495 3.495 0 0 1 4.95 0a3.48 3.48 0 0 1 .59 4.13l1.88 1.88zM13 9V3.5L18.5 9z");
}

.ox62ppbtl {
  cx: 11.5px;
  cy: 14.5px;
  r: 1.5px;
  fill: currentColor;
}
</style><circle class="ox62ppbtl"/><path class="m2_97d_cb"/>`,
		"fallback": "ic:sharp-plagiarism",
	});
}

export default Component;
