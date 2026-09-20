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
		"content": `<style>.ycdq-ob8t {
  fill: currentColor;
  d: path("M14 16h5V8h-5zm2-2v-4h1v4zm-8 2h5V8H8zm2-2v-4h1v4zm-5 2h2V8H5zm-3 4V4h20v16z");
}
</style><path class="ycdq-ob8t"/>`,
		"fallback": "material-symbols:money-sharp",
	});
}

export default Component;
