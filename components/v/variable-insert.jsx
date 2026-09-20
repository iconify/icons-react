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
		"content": `<style>.zhavzk43w {
  fill: currentColor;
  d: path("M4 16V8h16v3.192h-5.423V16zm17.677 3l-3.715-3.71v3.21h-1v-4.923h4.923v1h-3.216l3.697 3.735z");
}
</style><path class="zhavzk43w"/>`,
		"fallback": "material-symbols-light:variable-insert",
	});
}

export default Component;
