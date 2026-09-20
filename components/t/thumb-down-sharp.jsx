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
		"content": `<style>.wdt8db1ag {
  fill: currentColor;
  d: path("M2 15v-3.17L5.304 4h11.042v11l-6.269 6.192l-.87-.869L10.335 15zm15.346 0V4H21v11z");
}
</style><path class="wdt8db1ag"/>`,
		"fallback": "material-symbols-light:thumb-down-sharp",
	});
}

export default Component;
