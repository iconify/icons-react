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
		"content": `<style>.sp4732bla {
  fill: currentColor;
  d: path("m7.4 14.702l-.708-.708L12 8.687l5.308 5.307l-.708.708l-4.6-4.594z");
}
</style><path class="sp4732bla"/>`,
		"fallback": "material-symbols-light:stat-1-sharp",
	});
}

export default Component;
