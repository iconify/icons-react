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
		"content": `<style>.u__gh7bij {
  fill: currentColor;
  d: path("M6.846 13.616v-3.231L5.231 12zM12 16.769l1.616-1.615h-3.231zm-1.616-7.923h3.231L12 7.231zm6.77 4.77L18.769 12l-1.615-1.616zM3 19V5h18v14z");
}
</style><path class="u__gh7bij"/>`,
		"fallback": "material-symbols-light:settings-overscan-sharp",
	});
}

export default Component;
