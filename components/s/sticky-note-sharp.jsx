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
		"content": `<style>.tjywkblmi {
  fill: currentColor;
  d: path("M16 21H3V3h18v13zm-1-2l4-4h-4zm-4-3h2v-6h3V8H8v2h3z");
}
</style><path class="tjywkblmi"/>`,
		"fallback": "material-symbols:sticky-note-sharp",
	});
}

export default Component;
