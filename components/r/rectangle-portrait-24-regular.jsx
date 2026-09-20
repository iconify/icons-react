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
		"content": `<style>.bbl5v4b-v {
  fill: currentColor;
  d: path("M7.25 22A3.25 3.25 0 0 1 4 18.75V5.25A3.25 3.25 0 0 1 7.25 2h9.5A3.25 3.25 0 0 1 20 5.25v13.5A3.25 3.25 0 0 1 16.75 22zM5.5 18.75c0 .966.784 1.75 1.75 1.75h9.5a1.75 1.75 0 0 0 1.75-1.75V5.25a1.75 1.75 0 0 0-1.75-1.75h-9.5A1.75 1.75 0 0 0 5.5 5.25z");
}
</style><path class="bbl5v4b-v"/>`,
		"fallback": "fluent:rectangle-portrait-24-regular",
	});
}

export default Component;
