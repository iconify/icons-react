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
		"content": `<style>.pwvgz7bhp {
  fill: currentColor;
  d: path("M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h10.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H21c.55 0 1-.45 1-1s-.45-1-1-1zm-2-8h-2V9h2zm-4 0H6V9h8zm0 2v2H6v-2zm2 0h2v2h-2zm2-6h-2V5h2zm-4-2v2H6V5zM6 19v-2h8v2zm10 0v-2h2v2z");
}
</style><path class="pwvgz7bhp"/>`,
		"fallback": "ic:round-blinds-closed",
	});
}

export default Component;
