import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kj73mib-f {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--dd2e44, #dd2e44);
}
</style><circle class="kj73mib-f"/>`,
		"fallback": "twemoji:red-circle",
	});
}

export default Component;
