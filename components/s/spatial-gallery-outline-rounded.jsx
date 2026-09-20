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
		"content": `<style>.kduqktb7s {
  fill: currentColor;
  d: path("M10 16.125h4V13h-4zM10 11h4V7.9h-4zm-6 0h4V7.825L4 6.65zm0 6.375l4-1.1V13H4zm16 0V13h-4v3.275zM16 11h4V6.75L16 7.8zm-1 7.125H9l-5.75 1.55q-.475.125-.862-.175T2 18.7V5.325q0-.5.388-.788t.887-.162L9 6h6l5.75-1.55q.475-.125.863.175t.387.8V18.7q0 .5-.387.8t-.863.175z");
}
</style><path class="kduqktb7s"/>`,
		"fallback": "material-symbols:spatial-gallery-outline-rounded",
	});
}

export default Component;
