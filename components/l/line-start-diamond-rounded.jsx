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
		"content": `<style>.n5_4ups7d {
  fill: currentColor;
  d: path("m8.3 18.3l-5.6-5.6q-.3-.3-.3-.7t.3-.7l5.6-5.6q.3-.3.7-.3t.7.3L15 11h6q.425 0 .713.288T22 12t-.288.713T21 13h-6l-5.3 5.3q-.3.3-.7.3t-.7-.3");
}
</style><path class="n5_4ups7d"/>`,
		"fallback": "material-symbols:line-start-diamond-rounded",
	});
}

export default Component;
