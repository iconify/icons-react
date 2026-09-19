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
		"content": `<style>.m1wjqqbnz {
  fill: currentColor;
  d: path("M22 4H2v16h20zM4 6h2v12H4zm16 12h-2V6h2z");
}
</style><path class="m1wjqqbnz"/>`,
		"fallback": "ic:sharp-width-wide",
	});
}

export default Component;
