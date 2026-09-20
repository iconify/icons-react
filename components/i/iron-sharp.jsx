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
		"content": `<style>.mq7hykbbb {
  fill: currentColor;
  d: path("M3 17v-2.077q0-1.364.992-2.336t2.412-.971h8.962V9H9.269v1.5h-1V8h8.097v6.462H18V7h3v1h-2v7.462h-2.634V17z");
}
</style><path class="mq7hykbbb"/>`,
		"fallback": "material-symbols-light:iron-sharp",
	});
}

export default Component;
