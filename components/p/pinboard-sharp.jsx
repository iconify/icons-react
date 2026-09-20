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
		"content": `<style>.mb5nk3b7q {
  fill: currentColor;
  d: path("m6.5 22l-1-1v-4H2v-2l1.5-2.65V10H2V8h9v2H9.5v2.35L11 15v2H7.5v4zm5.5-2v-2h8V6H2V4h20v16z");
}
</style><path class="mb5nk3b7q"/>`,
		"fallback": "material-symbols:pinboard-sharp",
	});
}

export default Component;
