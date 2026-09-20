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
		"content": `<style>.gr2theeis {
  fill: currentColor;
  d: path("m10 19l-7-7l7-7zm-1.5-3.625v-6.75L5.125 12zM14 19V5l7 7z");
}
</style><path class="gr2theeis"/>`,
		"fallback": "material-symbols:switch-left-outline",
	});
}

export default Component;
