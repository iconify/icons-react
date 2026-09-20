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
		"content": `<style>.judecac-n {
  fill: currentColor;
  d: path("M3 17V7h18v4h-7v6zm18.6 3L18 16.425V19.5h-2V13h6.5v2h-3.1l3.6 3.6z");
}
</style><path class="judecac-n"/>`,
		"fallback": "material-symbols:variable-insert-sharp",
	});
}

export default Component;
