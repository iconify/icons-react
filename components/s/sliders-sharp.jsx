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
		"content": `<style>.yit-lcg9h {
  fill: currentColor;
  d: path("M2 15V9h20v6zm12-2h6v-2h-6z");
}
</style><path class="yit-lcg9h"/>`,
		"fallback": "material-symbols:sliders-sharp",
	});
}

export default Component;
