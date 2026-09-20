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
		"content": `<style>.hdwwobb6o {
  fill: currentColor;
  d: path("M11.808 16.827L4.212 12l7.596-4.827V11.5h9.115v1h-9.115zm-1-1.823V8.996L6.09 12zm0-3.004");
}
</style><path class="hdwwobb6o"/>`,
		"fallback": "material-symbols-light:line-start-arrow-outline-sharp",
	});
}

export default Component;
