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
		"content": `<style>.ghls6ybrc {
  fill: currentColor;
  d: path("M10.524 5a3.25 3.25 0 0 0-3.018 2.043l-6.2 15.5C.452 24.678 2.024 27 4.324 27h17.153a3.25 3.25 0 0 0 3.017-2.043l6.2-15.5C31.548 7.322 29.976 5 27.677 5z");
}
</style><path class="ghls6ybrc"/>`,
		"fallback": "fluent:rhombus-32-filled",
	});
}

export default Component;
