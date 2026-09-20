import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w5uwxotbk {
  fill: currentColor;
  d: path("M14.5 7.5H25v-.75A3.75 3.75 0 0 0 21.25 3H14.5zM13 3H6.75A3.75 3.75 0 0 0 3 6.75v.75h10zm1.5 22h6.75A3.75 3.75 0 0 0 25 21.25v-.75H14.5zM13 20.5H3v.75A3.75 3.75 0 0 0 6.75 25H13zM3 9h22v10H3zm10 1v8h1.5v-8z");
}
</style><path class="w5uwxotbk"/>`,
		"fallback": "fluent:table-cells-split-28-filled",
	});
}

export default Component;
