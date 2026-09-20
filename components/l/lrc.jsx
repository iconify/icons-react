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
		"content": `<style>.pohvsdqhp {
  fill: var(--svg-color--1f63ff, #1f63ff);
  d: path("M8.992 5.116v13.767L3 13.993zm.001 13.767l5.654-4.889l-1.644-2.582H21z");
}
</style><path class="pohvsdqhp"/>`,
		"fallback": "token-branded:lrc",
	});
}

export default Component;
