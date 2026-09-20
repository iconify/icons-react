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
		"content": `<style>.zmib_7i6j {
  fill: currentColor;
  d: path("M1 4.5A2.5 2.5 0 0 1 3.5 2h9A2.5 2.5 0 0 1 15 4.5v2.757a5.5 5.5 0 0 0-1-.657V4.5A1.5 1.5 0 0 0 12.5 3h-9A1.5 1.5 0 0 0 2 4.5v5A1.5 1.5 0 0 0 3.5 11h2.522a5.6 5.6 0 0 0 0 1H3.5A2.5 2.5 0 0 1 1 9.5zm15 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12z");
}
</style><path class="zmib_7i6j"/>`,
		"fallback": "fluent:slide-add-16-regular",
	});
}

export default Component;
