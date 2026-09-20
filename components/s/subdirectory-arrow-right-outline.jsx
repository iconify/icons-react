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
		"content": `<style>.b9rf4pbkn {
  fill: currentColor;
  d: path("m14 20l-.713-.713l3.792-3.787H6V5h1v9.5h10.079l-3.792-3.792l.707-.714L19 15z");
}
</style><path class="b9rf4pbkn"/>`,
		"fallback": "material-symbols-light:subdirectory-arrow-right-outline",
	});
}

export default Component;
