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
		"content": `<style>.fpwtlxjjl {
  fill: currentColor;
  d: path("M6.4 12.689L5.712 12L12 5.712L18.288 12l-.688.689L12 7.114z");
}
</style><path class="fpwtlxjjl"/>`,
		"fallback": "material-symbols-light:keyboard-control-key-sharp",
	});
}

export default Component;
