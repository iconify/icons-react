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
		"content": `<style>.sch2pmb3a {
  fill: currentColor;
  d: path("M12 6.5a3.5 3.5 0 1 1 7 0v19a3.5 3.5 0 1 1-7 0zM25.5 9a3.5 3.5 0 0 0-3.5 3.5v13a3.5 3.5 0 1 0 7 0v-13A3.5 3.5 0 0 0 25.5 9M2 18.5a3.5 3.5 0 1 1 7 0v7a3.5 3.5 0 1 1-7 0z");
}
</style><path class="sch2pmb3a"/>`,
		"fallback": "fluent:poll-32-filled",
	});
}

export default Component;
