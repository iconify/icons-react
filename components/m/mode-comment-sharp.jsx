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
		"content": `<style>.an3a52lgo {
  fill: currentColor;
  d: path("M3 17V3h18v17.077L17.923 17z");
}
</style><path class="an3a52lgo"/>`,
		"fallback": "material-symbols-light:mode-comment-sharp",
	});
}

export default Component;
