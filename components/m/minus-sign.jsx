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
		"content": `<style>.c700cvb5n {
  fill: var(--svg-color--4d5357, #4d5357);
  d: path("M2 26h60v12H2z");
}
</style><path class="c700cvb5n"/>`,
		"fallback": "emojione:minus-sign",
	});
}

export default Component;
