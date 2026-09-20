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
		"content": `<style>.l_4hfsnbq {
  fill: currentColor;
  d: path("M10 14h4v-2h-4zm0-3h8V9h-8zm0-3h8V6h-8zM6 18V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="l_4hfsnbq"/>`,
		"fallback": "material-symbols:library-books-sharp",
	});
}

export default Component;
