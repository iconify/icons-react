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
		"content": `<style>.s7-t6qz1w {
  fill: currentColor;
  d: path("M10 22V10h12v12zm2.5-3h7l-2.3-3l-1.7 2.25l-1.2-1.65zM8 17.75q-2.675-.675-4.337-2.838T2 10q0-3.35 2.325-5.675T10 2q2.75 0 4.913 1.662T17.75 8H8z");
}
</style><path class="s7-t6qz1w"/>`,
		"fallback": "material-symbols:vr180-create2d-sharp",
	});
}

export default Component;
