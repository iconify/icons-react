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
		"content": `<style>.zajmpgbkt {
  fill: currentColor;
  d: path("M11.998 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-6-2a6 6 0 1 1 12 0a6 6 0 0 1-12 0m6-4.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M1.996 12c0-5.524 4.478-10.002 10.002-10.002S22 6.476 22 12s-4.478 10.002-10.002 10.002S1.996 17.524 1.996 12m10.002-8.502a8.502 8.502 0 1 0 0 17.004a8.502 8.502 0 0 0 0-17.004");
}
</style><path class="zajmpgbkt"/>`,
		"fallback": "fluent:target-24-regular",
	});
}

export default Component;
