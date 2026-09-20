import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k63xtibdz {
  fill: currentColor;
  d: path("M2 8.25A3.25 3.25 0 0 1 5.25 5h21.5A3.25 3.25 0 0 1 30 8.25v15.5A3.25 3.25 0 0 1 26.75 27H5.25A3.25 3.25 0 0 1 2 23.75zM13 21a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z");
}
</style><path class="k63xtibdz"/>`,
		"fallback": "fluent:tablet-32-filled",
	});
}

export default Component;
