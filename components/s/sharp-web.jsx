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
		"content": `<style>.ucrd7xb-m {
  fill: currentColor;
  d: path("M22 4H2v16h20zM4 9h10.5v3.5H4zm0 5.5h10.5V18H4zM20 18h-3.5V9H20z");
}
</style><path class="ucrd7xb-m"/>`,
		"fallback": "ic:sharp-web",
	});
}

export default Component;
