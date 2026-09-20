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
		"content": `<style>.uz43wjbwe {
  fill: currentColor;
  d: path("M4 18h16v-8h-7V6H4zm-1 1V5h18v14zm1-1V6z");
}
</style><path class="uz43wjbwe"/>`,
		"fallback": "material-symbols-light:tab-outline-sharp",
	});
}

export default Component;
