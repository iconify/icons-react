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
		"content": `<style>.o-tks6a0z {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12zm1-1h16V8h-8.81L9.195 6H4zm0 0V6zm2.5-2.5h7v-1h-7zm0-4h11v-1h-11z");
}
</style><path class="o-tks6a0z"/>`,
		"fallback": "material-symbols-light:topic-outline-sharp",
	});
}

export default Component;
