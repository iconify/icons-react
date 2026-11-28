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
		"content": `<style>.cbi_7_8pk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2L18 2C20.2092 2 22 3.7908 22 6L22 18C22 20.2092 20.2092 22 18 22L6 22C3.7908 22 2 20.2092 2 18L2 6C2 3.7908 3.7908 2 6 2ZM4 11L4 13L20 13L20 11Z");
}
</style><path clip-rule="evenodd" class="cbi_7_8pk"/>`,
		"fallback": "keyline-icons:rows-2-fill",
	});
}

export default Component;
