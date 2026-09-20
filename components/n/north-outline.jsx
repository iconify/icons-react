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
		"content": `<style>.q-1b2fjdo {
  fill: currentColor;
  d: path("M11.5 21V4.864l-5.158 5.152l-.688-.689L12 2.981l6.346 6.346l-.688.714L12.5 4.883V21z");
}
</style><path class="q-1b2fjdo"/>`,
		"fallback": "material-symbols-light:north-outline",
	});
}

export default Component;
