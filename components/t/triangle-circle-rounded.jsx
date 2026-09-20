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
		"content": `<style>.gb0-tabct {
  fill: currentColor;
  d: path("M8.525 14.866h6.93q.463 0 .704-.407t-.003-.815l-3.46-5.757q-.246-.385-.698-.385t-.694.385l-3.478 5.739q-.245.407-.004.823q.241.417.703.417m-.03 5.433q-1.643-.701-2.868-1.926t-1.926-2.866T3 12.003t.701-3.508t1.926-2.857T8.493 3.71T11.998 3t3.509.709t2.859 1.922t1.925 2.857t.709 3.509t-.71 3.509t-1.926 2.867q-1.216 1.225-2.856 1.926T12.002 21t-3.508-.701");
}
</style><path class="gb0-tabct"/>`,
		"fallback": "material-symbols-light:triangle-circle-rounded",
	});
}

export default Component;
