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
		"content": `<style>.jc7luvbbj {
  fill: currentColor;
  d: path("M8 22v-6H2V2h14v6h6v14zm2-2h10V10h-6V4H4v10h6zm2-8");
}
</style><path class="jc7luvbbj"/>`,
		"fallback": "material-symbols:stack-group-outline-sharp",
	});
}

export default Component;
