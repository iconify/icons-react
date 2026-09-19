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
		"content": `<style>.k79q3xboj {
  cx: 6.5px;
  cy: 6.5px;
  r: 1.5px;
  fill: currentColor;
}

.tawtilbcd {
  fill: currentColor;
  d: path("m21.41 11.41l-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83M12.83 20L4 11.17V4h7.17L20 12.83z");
}
</style><path class="tawtilbcd"/><circle class="k79q3xboj"/>`,
		"fallback": "ic:outline-sell",
	});
}

export default Component;
