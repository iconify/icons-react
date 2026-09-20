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
		"content": `<style>.ovpssnovv {
  fill: currentColor;
  d: path("m3.053 12.97l3.753-9.496a.75.75 0 0 1 1.345-.104l.05.105l3.747 9.5a.75.75 0 0 1-1.352.643l-.043-.092L9.556 11H5.443l-.995 2.52a.75.75 0 0 1-.876.454l-.098-.031a.75.75 0 0 1-.452-.876zm4.45-7.178L6.036 9.5h2.928zM12 7.75c0 .414.336.75.75.75h5.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72h-5.69a.75.75 0 0 0-.75.75m-9 9.5c0 .414.336.75.75.75h14.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0-.75.75");
}
</style><path class="ovpssnovv"/>`,
		"fallback": "fluent:text-direction-horizontal-right-24-regular",
	});
}

export default Component;
