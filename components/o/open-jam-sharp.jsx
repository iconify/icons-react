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
		"content": `<style>.vp9jj_b3a {
  fill: currentColor;
  d: path("M7 19.77v-1h5.5v-8.547l2.1 2.1l.708-.707L12 8.308l-3.308 3.308l.708.707l2.1-2.1V15H3V4h18v11h-7.5v3.77H17v1z");
}
</style><path class="vp9jj_b3a"/>`,
		"fallback": "material-symbols-light:open-jam-sharp",
	});
}

export default Component;
