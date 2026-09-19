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
		"content": `<style>.z0mbrxbfg {
  fill: currentColor;
  d: path("M15 5.1L9 3L3 5.02v16.2l6-2.33l6 2.1l6-2.02V2.77zm0 13.79l-6-2.11V5.11l6 2.11z");
}
</style><path class="z0mbrxbfg"/>`,
		"fallback": "ic:sharp-map",
	});
}

export default Component;
