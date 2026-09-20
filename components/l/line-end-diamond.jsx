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
		"content": `<style>.hscoo02qk {
  fill: currentColor;
  d: path("m15 19l-6-6H2v-2h7l6-6l7 7z");
}
</style><path class="hscoo02qk"/>`,
		"fallback": "material-symbols:line-end-diamond",
	});
}

export default Component;
