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
		"content": `<style>.p9j1aab-o {
  fill: currentColor;
  d: path("M6 18V2h16v16zm2-2h12V8h-7V4H8zm-6 6V6h2v14h14v2zM8 4v12z");
}
</style><path class="p9j1aab-o"/>`,
		"fallback": "material-symbols:tab-group-outline-sharp",
	});
}

export default Component;
