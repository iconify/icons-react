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
		"content": `<style>.srxdbmbht {
  fill: currentColor;
  d: path("M22 4H2v16h20zM4 6h4v12H4zm16 12h-4V6h4z");
}
</style><path class="srxdbmbht"/>`,
		"fallback": "ic:sharp-width-normal",
	});
}

export default Component;
