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
		"content": `<style>.ykzslzt5f {
  fill: currentColor;
  d: path("M19.75 5A2.25 2.25 0 0 1 22 7.25v1.784c0 .532-.4.919-.848.997a2 2 0 0 0 0 3.937c.448.078.848.465.848.997v1.785A2.25 2.25 0 0 1 19.75 19H4.25A2.25 2.25 0 0 1 2 16.75v-1.785c0-.532.4-.919.848-.997l.173-.038a1.999 1.999 0 0 0-.173-3.899A1.02 1.02 0 0 1 2 9.034V7.25A2.25 2.25 0 0 1 4.25 5zM4.25 6.5a.75.75 0 0 0-.75.75v1.4a3.494 3.494 0 0 1 0 6.7v1.4c0 .414.336.75.75.75H14.5v-1.25a.75.75 0 0 1 1.5 0v1.25h3.75a.75.75 0 0 0 .75-.75v-1.401a3.494 3.494 0 0 1 0-6.7V7.25a.75.75 0 0 0-.75-.75H16v1.25a.75.75 0 0 1-1.5 0V6.5zm11 3.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75");
}
</style><path class="ykzslzt5f"/>`,
		"fallback": "fluent:ticket-horizontal-24-regular",
	});
}

export default Component;
