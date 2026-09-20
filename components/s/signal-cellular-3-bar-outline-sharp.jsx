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
		"content": `<style>.hixlo8gbn {
  fill: currentColor;
  d: path("M2 22L22 2v20zm13-2h5V6.85l-5 5z");
}
</style><path class="hixlo8gbn"/>`,
		"fallback": "material-symbols:signal-cellular-3-bar-outline-sharp",
	});
}

export default Component;
