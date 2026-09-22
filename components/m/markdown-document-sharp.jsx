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
		"content": `<style>.bx03zlrcd {
  fill: currentColor;
  d: path("M12 22v-9h10v9h-2v-7h-2v5h-2v-5h-2v7zm-9-1V3h18v8H7v2h3v2H7v2h3v4z");
}
</style><path class="bx03zlrcd"/>`,
		"fallback": "material-symbols:markdown-document-sharp",
	});
}

export default Component;
