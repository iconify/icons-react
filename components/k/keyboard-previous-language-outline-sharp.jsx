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
		"content": `<style>.c-yfmccoo {
  fill: currentColor;
  d: path("M2 22V8h20v14zm2-2h16V10H4zm4-1h8v-2H8zm-3-3h2v-2H5zm3 0h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2zm3 0h2v-2h-2zM5 13h2v-2H5zm3 0h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2zm3 0h2v-2h-2zM4 20V10zM6 6V1h2v1.525Q8.8 1.8 9.825 1.4T12 1q2.2 0 3.875 1.413T17.9 6h-2.05q-.35-1.325-1.412-2.162T12 3q-.75 0-1.425.263T9.375 4H11v2z");
}
</style><path class="c-yfmccoo"/>`,
		"fallback": "material-symbols:keyboard-previous-language-outline-sharp",
	});
}

export default Component;
