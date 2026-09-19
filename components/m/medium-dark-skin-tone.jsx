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
		"content": `<style>.cytjfwb1u {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--b47d56, #b47d56);
}
</style><circle class="cytjfwb1u"/>`,
		"fallback": "emojione:medium-dark-skin-tone",
	});
}

export default Component;
