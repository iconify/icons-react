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
		"content": `<style>.o7b_rbczp {
  fill: currentColor;
  d: path("m9.63 20.385l.932-2.916l-2.37-1.661h2.877l.739-2.377l-4.423-2.573V2.577h9.23v8.185l-4.423 2.669l.739 2.377h2.877l-2.37 1.661l.931 2.916L12 18.573zM12 12.38l.5-.292V3.577h-1v8.512z");
}
</style><path class="o7b_rbczp"/>`,
		"fallback": "material-symbols-light:military-tech-sharp",
	});
}

export default Component;
