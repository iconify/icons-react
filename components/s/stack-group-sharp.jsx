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
		"content": `<style>.w6_jge8fm {
  fill: currentColor;
  d: path("M8 22v-6H2V2h14v6h6v14z");
}
</style><path class="w6_jge8fm"/>`,
		"fallback": "material-symbols:stack-group-sharp",
	});
}

export default Component;
