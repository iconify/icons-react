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
		"content": `<style>.n8lrunbyo {
  fill: currentColor;
  d: path("M9.8 14.5h1.6l.8-2.3h3.65l.8 2.3h1.55l-3.4-9h-1.6zm2.85-3.6l1.3-3.75h.1l1.3 3.75zM6 18V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zM8 4v12z");
}
</style><path class="n8lrunbyo"/>`,
		"fallback": "material-symbols:type-specimen-outline-sharp",
	});
}

export default Component;
