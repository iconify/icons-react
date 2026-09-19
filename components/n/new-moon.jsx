import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lzpq-ccsc {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: currentColor;
}
</style><circle class="lzpq-ccsc"/>`,
		"fallback": "emojione-monotone:new-moon",
	});
}

export default Component;
