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
		"content": `<style>.ald56hylg {
  fill: currentColor;
  d: path("M3 19V5h18v14zm8.308-6.308H19V7h-7.692z");
}
</style><path class="ald56hylg"/>`,
		"fallback": "material-symbols-light:picture-in-picture-sharp",
	});
}

export default Component;
