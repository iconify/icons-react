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
		"content": `<style>.yfd4ij7_u {
  fill: currentColor;
  d: path("m6.5 22l-1-1v-4H2v-2l1.5-2.65V10H2V8h9v2H9.5v2.35L11 15v2H7.5v4zm5.5-2v-2h8V6H2V4h20v16zm-7.7-5h4.4l-1.2-2.1V10h-2v2.9zm2.2 0");
}
</style><path class="yfd4ij7_u"/>`,
		"fallback": "material-symbols:pinboard-outline-sharp",
	});
}

export default Component;
