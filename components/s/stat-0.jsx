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
		"content": `<style>.f2bnb9bzw {
  fill: currentColor;
  d: path("m12 19l-7-7l7-7l7 7z");
}
</style><path class="f2bnb9bzw"/>`,
		"fallback": "material-symbols:stat-0",
	});
}

export default Component;
