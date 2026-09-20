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
		"content": `<style>.yqkb6sc-j {
  fill: currentColor;
  d: path("M4 13q-1.25 0-2.125-.875T1 10t.875-2.125T4 7t2.125.875T7 10t-.875 2.125T4 13m13.875-.875Q17 11.25 17 10t.875-2.125T20 7t2.125.875T23 10t-.875 2.125T20 13t-2.125-.875M14.5 11.65L10.35 7.5q.35-.25.775-.375T12 7q1.25 0 2.125.875T15 10q0 .45-.125.875t-.375.775m5.3 10.95L16.2 19H2v-2h12.2L1.4 4.2l1.4-1.4l18.4 18.4z");
}
</style><path class="yqkb6sc-j"/>`,
		"fallback": "material-symbols:password-2-off-sharp",
	});
}

export default Component;
