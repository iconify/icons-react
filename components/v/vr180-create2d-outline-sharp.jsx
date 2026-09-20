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
		"content": `<style>.ehaqiub9j {
  fill: currentColor;
  d: path("M8 17.75q-2.675-.675-4.337-2.838T2 10q0-3.35 2.325-5.675T10 2q2.75 0 4.913 1.662T17.75 8h-2.1Q15 6.2 13.463 5.1T10 4Q7.5 4 5.75 5.75T4 10q0 1.925 1.1 3.463T8 15.65zM10 22V10h12v12zm2-2h8v-8h-8zm.5-1h7l-2.3-3l-1.7 2.25l-1.2-1.65zM9.825 9.825");
}
</style><path class="ehaqiub9j"/>`,
		"fallback": "material-symbols:vr180-create2d-outline-sharp",
	});
}

export default Component;
