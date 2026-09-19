import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vyjpbsbqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 19.262V16.84m0 2.422l-1.48 1.749m-.673-3.095L24 19.262m0 0l1.48 1.749m.673-3.095L24 19.262m6.521 0V16.84m0 2.422l-1.48 1.749m-.673-3.095l2.153 1.346m0 0l1.48 1.749m.673-3.095l-2.153 1.346m-13.042 0V16.84m0 2.422l-1.48 1.749m-.673-3.095l2.153 1.346m0 0l1.48 1.749m.673-3.095l-2.153 1.346m17.34 11.898l8.681-6.677l-8.681-6.676M13.181 31.16L4.5 24.483l8.681-6.676");
}
</style><path class="vyjpbsbqy"/>`,
		"fallback": "arcticons:otp-helper",
	});
}

export default Component;
