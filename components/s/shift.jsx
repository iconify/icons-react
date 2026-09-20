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
		"content": `<style>.ykmzjjlqy {
  fill: currentColor;
  d: path("M8 21v-8H3l9-11l9 11h-5v8z");
}
</style><path class="ykmzjjlqy"/>`,
		"fallback": "material-symbols:shift",
	});
}

export default Component;
