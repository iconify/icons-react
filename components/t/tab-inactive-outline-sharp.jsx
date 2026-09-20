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
		"content": `<style>.dy76itb-z {
  fill: currentColor;
  d: path("M6 22v-4H2v-4h2v2h2V6h10V4h-2V2h4v4h4v16zm2-2h12V8H8zm0 0V8zm-6-8V8h2v4zm0-6V2h4v2H4v2zm6-2V2h4v2z");
}
</style><path class="dy76itb-z"/>`,
		"fallback": "material-symbols:tab-inactive-outline-sharp",
	});
}

export default Component;
