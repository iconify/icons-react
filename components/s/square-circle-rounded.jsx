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
		"content": `<style>.sb8vw5kfi {
  fill: currentColor;
  d: path("M9 15.808h6q.343 0 .576-.233t.232-.575V9q0-.343-.233-.575T15 8.192H9q-.343 0-.575.232T8.192 9v6q0 .343.232.576t.576.232m-.506 4.491q-1.642-.701-2.867-1.926t-1.926-2.866T3 12.003t.701-3.508t1.926-2.857T8.493 3.71T11.998 3t3.509.709t2.859 1.922t1.925 2.857t.709 3.509t-.71 3.509t-1.926 2.867t-2.856 1.926t-3.506.701t-3.508-.701");
}
</style><path class="sb8vw5kfi"/>`,
		"fallback": "material-symbols-light:square-circle-rounded",
	});
}

export default Component;
