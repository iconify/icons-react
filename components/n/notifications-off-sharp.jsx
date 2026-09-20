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
		"content": `<style>.mrpw1nono {
  fill: currentColor;
  d: path("M5 18.77v-1h1.616V9.845q0-.575.125-1.154q.126-.578.378-1.111l2.266 2.265H7.969l-5.3-5.3l.708-.707l17.285 17.284l-.708.708l-3.073-3.062zm12.385-3.812l-9.07-9.07q.558-.515 1.239-.863T11 4.546V3h2v1.546q1.923.327 3.154 1.824t1.23 3.476zM12 21.385q-.671 0-1.143-.472t-.472-1.144h3.23q0 .672-.472 1.144T12 21.385");
}
</style><path class="mrpw1nono"/>`,
		"fallback": "material-symbols-light:notifications-off-sharp",
	});
}

export default Component;
