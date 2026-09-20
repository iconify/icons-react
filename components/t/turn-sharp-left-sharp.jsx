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
		"content": `<style>.t7zedfgwr {
  fill: currentColor;
  d: path("M16 21v-6H6V6.8L4.4 8.4L3 7l4-4l4 4l-1.4 1.4L8 6.8V13h10v8z");
}
</style><path class="t7zedfgwr"/>`,
		"fallback": "material-symbols:turn-sharp-left-sharp",
	});
}

export default Component;
