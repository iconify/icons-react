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
		"content": `<style>.jpnduibkz {
  fill: currentColor;
  d: path("m12.874 1.514l10 18A1 1 0 0 1 22 21H2a1 1 0 0 1-.874-1.486l10-18a1 1 0 0 1 1.748 0M10 13a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Z");
}
</style><path class="jpnduibkz"/>`,
		"fallback": "coolicons:triangle-minus-fill-sharp",
	});
}

export default Component;
