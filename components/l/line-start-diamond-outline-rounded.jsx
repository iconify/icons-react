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
		"content": `<style>.wzq9zma-h {
  fill: currentColor;
  d: path("M9 16.175L13.175 12L9 7.825L4.825 12zM8.3 18.3l-5.6-5.6q-.3-.3-.3-.7t.3-.7l5.6-5.6q.3-.3.7-.3t.7.3L15 11h6q.425 0 .713.288T22 12t-.288.713T21 13h-6l-5.3 5.3q-.3.3-.7.3t-.7-.3M9 12");
}
</style><path class="wzq9zma-h"/>`,
		"fallback": "material-symbols:line-start-diamond-outline-rounded",
	});
}

export default Component;
