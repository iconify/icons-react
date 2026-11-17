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
		"content": `<style>.n_jv18bpl {
  fill: currentColor;
  d: path("M16 6v3h4a1 1 0 0 1 1 1v9.757L10.243 9H14V6a2 2 0 0 0-4 0a1 1 0 0 1-2 0a4 4 0 0 1 8 0M2.707 4.293l17 17a.999.999 0 1 1-1.414 1.414L17.586 22H4a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h.586L1.293 5.707a.999.999 0 1 1 1.414-1.414");
}
</style><path class="n_jv18bpl"/>`,
		"fallback": "coolicons:lock-off-fill-sharp",
	});
}

export default Component;
