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
		"content": `<style>.exjy7vblv {
  fill: currentColor;
  d: path("M14 2H4.01L4 22h16V8zm1 9h-4v1h4v5h-2v1h-2v-1H9v-2h4v-1H9V9h2V8h2v1h2z");
}
</style><path class="exjy7vblv"/>`,
		"fallback": "ic:sharp-request-page",
	});
}

export default Component;
