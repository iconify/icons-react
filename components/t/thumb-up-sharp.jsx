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
		"content": `<style>.kw921fbsc {
  fill: currentColor;
  d: path("M7.654 20V9l6.269-6.192l.87.869L13.665 9H22v3.17L18.696 20zM3 20V9h3.654v11z");
}
</style><path class="kw921fbsc"/>`,
		"fallback": "material-symbols-light:thumb-up-sharp",
	});
}

export default Component;
