import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vrke-vbad {
  fill: currentColor;
  d: path("M10.5 7.959a3 3 0 1 0-1 0V11h-2A1.5 1.5 0 0 0 6 12.5v.5h8v-.5a1.5 1.5 0 0 0-1.5-1.5h-2zM3 16a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5z");
}
</style><path class="vrke-vbad"/>`,
		"fallback": "fluent:joystick-20-filled",
	});
}

export default Component;
