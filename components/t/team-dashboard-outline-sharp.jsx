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
		"content": `<style>.zzx2q-k9k {
  fill: currentColor;
  d: path("M4 20V4h16v16zm6.5-1v-6.5H5V19zm1 0H19v-6.5h-7.5zM5 11.5h14V5H5z");
}
</style><path class="zzx2q-k9k"/>`,
		"fallback": "material-symbols-light:team-dashboard-outline-sharp",
	});
}

export default Component;
