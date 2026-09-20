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
		"content": `<style>.nsb0_pb_t {
  fill: currentColor;
  d: path("M2 20V4h20v16zm14.975-2l2.3-8.65L7.075 6l-2.3 8.65z");
}
</style><path class="nsb0_pb_t"/>`,
		"fallback": "material-symbols:video-stable-sharp",
	});
}

export default Component;
