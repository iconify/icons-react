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
		"content": `<style>.f3bmzgnld {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="f3bmzgnld"/>`,
		"fallback": "material-symbols-light:rectangle-outline-sharp",
	});
}

export default Component;
