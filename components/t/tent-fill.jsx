import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ac088b0yr {
  fill: currentColor;
  d: path("m255.31 188.75l-64-144A8 8 0 0 0 184 40H72a8 8 0 0 0-7.31 4.75v.12l-64 143.88A8 8 0 0 0 8 200h240a8 8 0 0 0 7.31-11.25M64 184H20.31L64 85.7Zm16 0V85.7l43.69 98.3Z");
}
</style><path class="ac088b0yr"/>`,
		"fallback": "ph:tent-fill",
	});
}

export default Component;
