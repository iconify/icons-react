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
		"content": `<style>.xxq4918bf {
  fill: currentColor;
  d: path("M3 21V3h8v18zm10 0V3h8v18zm6-16h-4v14h4z");
}
</style><path class="xxq4918bf"/>`,
		"fallback": "material-symbols:splitscreen-left-sharp",
	});
}

export default Component;
