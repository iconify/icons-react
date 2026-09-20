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
		"content": `<style>.h6c1jpb7q {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V6H4zm12.975 0l2.3-8.689L7.075 6l-2.3 8.63zm-.713-1.239L5.994 13.942L7.79 7.22l10.267 2.8zM4 18V6z");
}
</style><path class="h6c1jpb7q"/>`,
		"fallback": "material-symbols-light:video-stable-outline-sharp",
	});
}

export default Component;
