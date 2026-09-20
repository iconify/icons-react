import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jsk901orb {
  fill: currentColor;
  d: path("M6.235 2.192A1.5 1.5 0 0 0 4 3.499v9a1.5 1.5 0 0 0 2.235 1.308l8-4.5a1.5 1.5 0 0 0 0-2.615z");
}
</style><path class="jsk901orb"/>`,
		"fallback": "fluent:play-16-filled",
	});
}

export default Component;
