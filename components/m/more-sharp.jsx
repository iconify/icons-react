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
		"content": `<style>.auxidabvy {
  fill: currentColor;
  d: path("M8.366 19L3 12l5.366-7H21v14zm.75-6.23h1.538v-1.54H9.116zm3.5 0h1.538v-1.54h-1.538zm3.5 0h1.538v-1.54h-1.538z");
}
</style><path class="auxidabvy"/>`,
		"fallback": "material-symbols-light:more-sharp",
	});
}

export default Component;
