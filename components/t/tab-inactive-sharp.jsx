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
		"content": `<style>.of5p68btr {
  fill: currentColor;
  d: path("M6 22v-4H2v-4h2v2h2V6h10V4h-2V2h4v4h4v16zM2 12V8h2v4zm0-6V2h4v2H4v2zm6-2V2h4v2z");
}
</style><path class="of5p68btr"/>`,
		"fallback": "material-symbols:tab-inactive-sharp",
	});
}

export default Component;
