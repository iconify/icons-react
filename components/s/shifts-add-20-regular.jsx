import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ct7fs6b3q {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v3.6a5.5 5.5 0 0 1 1-.393V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.207q-.149.524-.393 1H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-.5 16a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H6v1.5a.5.5 0 0 1-1 0V15H3.5a.5.5 0 0 1 0-1H5v-1.5a.5.5 0 0 1 .5-.5M11 6.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H11z");
}
</style><path class="ct7fs6b3q"/>`,
		"fallback": "fluent:shifts-add-20-regular",
	});
}

export default Component;
