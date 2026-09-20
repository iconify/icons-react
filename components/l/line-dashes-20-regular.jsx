import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gwwr9x_vx {
  fill: currentColor;
  d: path("M16.854 3.854a.5.5 0 0 0-.708-.708l-1 1a.5.5 0 0 0 .708.708zm-3 2.292a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708 0m-3 3a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708 0m-3 3a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708 0m-3 3.708a.5.5 0 0 0-.708-.708l-1 1a.5.5 0 0 0 .708.708z");
}
</style><path class="gwwr9x_vx"/>`,
		"fallback": "fluent:line-dashes-20-regular",
	});
}

export default Component;
