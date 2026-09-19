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
		"content": `<style>.o88bg8bub {
  fill: currentColor;
  d: path("M22 6H10v6H8V4h6V0H6v6H2v16h20z");
}
</style><path class="o88bg8bub"/>`,
		"fallback": "ic:sharp-markunread-mailbox",
	});
}

export default Component;
