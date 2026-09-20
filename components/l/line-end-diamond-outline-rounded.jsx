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
		"content": `<style>.ofln4dlhm {
  fill: currentColor;
  d: path("M15 16.175L19.175 12L15 7.825L10.825 12zm-.7 2.125L9 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h6l5.3-5.3q.3-.3.7-.3t.7.3l5.6 5.6q.3.3.3.7t-.3.7l-5.6 5.6q-.3.3-.7.3t-.7-.3M15 12");
}
</style><path class="ofln4dlhm"/>`,
		"fallback": "material-symbols:line-end-diamond-outline-rounded",
	});
}

export default Component;
