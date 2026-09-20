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
		"content": `<style>.und_oy_he {
  fill: currentColor;
  d: path("m14.27 13.558l3.346-1.904V7.808l-3.347-1.904l-3.346 1.904v3.846zm-9.685 7.47L2.927 8.067l2.612-.254v10.65h12.8l.086.825zm2.954-4.566V3H21v13.462z");
}
</style><path class="und_oy_he"/>`,
		"fallback": "material-symbols-light:stack-hexagon-sharp",
	});
}

export default Component;
