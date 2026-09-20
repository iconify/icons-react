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
		"content": `<style>.xsi_7gbwz {
  fill: currentColor;
  d: path("m2.515 11.874l13.011 7.007a1 1 0 0 0 .948 0l9.994-5.381H30v9a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5V11.589zM15.505 5a2.493 2.493 0 0 0 0 4a2.5 2.5 0 0 0-1.005 2a2.5 2.5 0 0 0 2.5 2.5h5.248L16 16.864L3.48 10.123l-1.476-.82A4.5 4.5 0 0 1 6.5 5zM30 10a1 1 0 1 1 0 2H17a1 1 0 1 1 0-2zm0-4a1 1 0 1 1 0 2H17a1 1 0 1 1 0-2zm0-4a1 1 0 1 1 0 2H17a1 1 0 1 1 0-2z");
}
</style><path class="xsi_7gbwz"/>`,
		"fallback": "fluent:mail-list-32-filled",
	});
}

export default Component;
