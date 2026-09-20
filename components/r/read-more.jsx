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
		"content": `<style>.x-fc89bnu {
  fill: currentColor;
  d: path("m7.45 17.45l-1.4-1.4L9.075 13H2v-2h7.075L6.05 7.95l1.4-1.4L12.9 12zM13 17v-2h9v2zm0-8V7h9v2zm3 4v-2h6v2z");
}
</style><path class="x-fc89bnu"/>`,
		"fallback": "material-symbols:read-more",
	});
}

export default Component;
