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
		"content": `<style>.wysxy5bia {
  fill: currentColor;
  d: path("M3.025 19V5H21v14zM5 17h3.325V7H5zm5.325 0h3.325V7h-3.325zm5.325 0h3.325V7H15.65z");
}
</style><path class="wysxy5bia"/>`,
		"fallback": "material-symbols:view-column-outline-sharp",
	});
}

export default Component;
