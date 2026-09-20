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
		"content": `<style>.qxuqhib4c {
  fill: currentColor;
  d: path("M4 19.385v-6h16v6zm0-8.77v-6h16v6z");
}
</style><path class="qxuqhib4c"/>`,
		"fallback": "material-symbols-light:view-agenda-sharp",
	});
}

export default Component;
