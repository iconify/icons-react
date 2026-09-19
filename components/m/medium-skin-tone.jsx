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
		"content": `<style>.jaca2pbta {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--d6a57c, #d6a57c);
}
</style><circle class="jaca2pbta"/>`,
		"fallback": "emojione:medium-skin-tone",
	});
}

export default Component;
