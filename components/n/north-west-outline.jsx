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
		"content": `<style>.ibepfewaa {
  fill: currentColor;
  d: path("M18.6 20L7 8.4V15H5V5h10v2H8.4L20 18.6z");
}
</style><path class="ibepfewaa"/>`,
		"fallback": "material-symbols:north-west-outline",
	});
}

export default Component;
