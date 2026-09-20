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
		"content": `<style>.ru8dvovtl {
  fill: currentColor;
  d: path("M3 15V9h5v3.9h-.9L8 15H6.5l-.9-2H4.5v2zm5.75 0l1.5-6h2.5l1.5 6h-1.5l-.35-1.5h-1.75l-.4 1.5zm6.75 0L14 9h1.5l.75 3L17 9h1.5l.75 3L20 9h1.5L20 15h-1.5l-.75-3.05L17 15zM11 12h1l-.25-1h-.5zm-6.5-.5h2v-1h-2z");
}
</style><path class="ru8dvovtl"/>`,
		"fallback": "material-symbols:raw-on-sharp",
	});
}

export default Component;
