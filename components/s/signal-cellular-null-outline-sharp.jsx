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
		"content": `<style>.zeyzhjsft {
  fill: currentColor;
  d: path("M2 22L22 2v20zm4.825-2H20V6.85z");
}
</style><path class="zeyzhjsft"/>`,
		"fallback": "material-symbols:signal-cellular-null-outline-sharp",
	});
}

export default Component;
