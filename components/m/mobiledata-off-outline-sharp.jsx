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
		"content": `<style>.mxwmbbc9u {
  fill: currentColor;
  d: path("M19.685 21.1L9.5 10.916v7.157l2.089-2.089l.719.708L9 20l-3.308-3.308l.72-.707L8.5 18.073V9.915L2.861 4.278l.708-.708l16.823 16.823zM15.5 12.65l-1-1V5.916l-2.1 2.1l-.708-.708L15 4l3.308 3.308l-.708.708l-2.1-2.1z");
}
</style><path class="mxwmbbc9u"/>`,
		"fallback": "material-symbols-light:mobiledata-off-outline-sharp",
	});
}

export default Component;
