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
		"content": `<style>.c-cu5rj5k {
  fill: currentColor;
  d: path("M7 15V9h4l5-5v16l-5-5z");
}
</style><path class="c-cu5rj5k"/>`,
		"fallback": "material-symbols:volume-mute-sharp",
	});
}

export default Component;
