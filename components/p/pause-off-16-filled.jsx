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
		"content": `<style>.x9p9aacdp {
  fill: currentColor;
  d: path("m13.147 13.854l1 1a.5.5 0 0 0 .707-.708l-13-13a.5.5 0 1 0-.708.708l1 1A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h2A1.5 1.5 0 0 0 7 12.5V7.707l2 2V12.5a1.5 1.5 0 0 0 1.5 1.5h2c.232 0 .45-.053.647-.146M9 6.879l5 5V3.5A1.5 1.5 0 0 0 12.5 2h-2A1.5 1.5 0 0 0 9 3.5zM4.121 2L7 4.879V3.5A1.5 1.5 0 0 0 5.5 2z");
}
</style><path class="x9p9aacdp"/>`,
		"fallback": "fluent:pause-off-16-filled",
	});
}

export default Component;
