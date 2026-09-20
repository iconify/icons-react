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
		"content": `<style>.qixyqcb4q {
  fill: currentColor;
  d: path("M2 21V6h6V2h8v4h6v15zm8-15h4V4h-4zM6 8H4v11h2zm10 11V8H8v11zm2-11v11h2V8zm-6 5.5");
}
</style><path class="qixyqcb4q"/>`,
		"fallback": "material-symbols:trip-outline-sharp",
	});
}

export default Component;
