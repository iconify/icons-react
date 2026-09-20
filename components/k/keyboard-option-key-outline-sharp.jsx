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
		"content": `<style>.ggiwukspm {
  fill: currentColor;
  d: path("m15.064 18.5l-6.926-12H4v-1h4.712l6.925 12H20v1zm.436-12v-1H20v1z");
}
</style><path class="ggiwukspm"/>`,
		"fallback": "material-symbols-light:keyboard-option-key-outline-sharp",
	});
}

export default Component;
