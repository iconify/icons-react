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
		"content": `<style>.l1ps4lbok {
  fill: currentColor;
  d: path("M3.4 18.5L2 17.05l7.5-7.5l4 4l2.9-3.25q-1.275-1.5-3-2.375T9.6 7.05q-1.775 0-3.35.663T3.4 9.5L2 8.05q1.55-1.4 3.475-2.2t4.125-.8q2.45 0 4.525.988T17.75 8.8l2.85-3.25L22 7l-3 3.4q.825 1.325 1.338 2.875T21 16.55h-2q-.15-1.25-.513-2.387T17.55 12l-3.95 4.45l-4.1-4.05z");
}
</style><path class="l1ps4lbok"/>`,
		"fallback": "material-symbols:multiline-chart",
	});
}

export default Component;
