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
		"content": `<style>.msn5gdzzt {
  fill: currentColor;
  d: path("M5 15h12V7H5zm-3 5V4h20v16z");
}
</style><path class="msn5gdzzt"/>`,
		"fallback": "material-symbols:magnification-large-sharp",
	});
}

export default Component;
