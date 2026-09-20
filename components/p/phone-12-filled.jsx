import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n_r09abgv {
  fill: currentColor;
  d: path("M3 2.5A1.5 1.5 0 0 1 4.5 1h3A1.5 1.5 0 0 1 9 2.5v7A1.5 1.5 0 0 1 7.5 11h-3A1.5 1.5 0 0 1 3 9.5zM5.5 8a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z");
}
</style><path class="n_r09abgv"/>`,
		"fallback": "fluent:phone-12-filled",
	});
}

export default Component;
