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
		"content": `<style>.jxg571b9c {
  fill: currentColor;
  d: path("M2 21V3h20v18zm4-4h12v-2H6zm0-4h4V7H6zm6 0h6v-2h-6zm0-4h6V7h-6z");
}
</style><path class="jxg571b9c"/>`,
		"fallback": "material-symbols:newsmode-sharp",
	});
}

export default Component;
