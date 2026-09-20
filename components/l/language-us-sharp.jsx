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
		"content": `<style>.n--j2qhfp {
  fill: currentColor;
  d: path("M4 17V7h2v8h3V7h2v10zm9 0v-3h2v1h3v-2h-5V7h7v3h-2V9h-3v2h5v6z");
}
</style><path class="n--j2qhfp"/>`,
		"fallback": "material-symbols:language-us-sharp",
	});
}

export default Component;
