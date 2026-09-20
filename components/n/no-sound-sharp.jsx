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
		"content": `<style>.mhtpzrekm {
  fill: currentColor;
  d: path("m14.785 15.308l-.708-.708l2.6-2.6l-2.6-2.6l.708-.708l2.6 2.6l2.6-2.6l.707.708l-2.6 2.6l2.6 2.6l-.707.708l-2.6-2.6zM4.308 14v-4H7.73l3.577-3.577v11.154L7.73 14z");
}
</style><path class="mhtpzrekm"/>`,
		"fallback": "material-symbols-light:no-sound-sharp",
	});
}

export default Component;
