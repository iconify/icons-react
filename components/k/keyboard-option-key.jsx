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
		"content": `<style>.z6r49jtdc {
  fill: currentColor;
  d: path("M14.775 19L7.85 7H3V5h6l6.925 12H21v2zM15 7V5h6v2z");
}
</style><path class="z6r49jtdc"/>`,
		"fallback": "material-symbols:keyboard-option-key",
	});
}

export default Component;
