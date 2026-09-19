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
		"content": `<style>.ni8tcwbfl {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m7.93 9H13V4.07c3.61.45 6.48 3.32 6.93 6.93M4 12c0-4.07 3.06-7.44 7-7.93v15.86c-3.94-.49-7-3.86-7-7.93m9 7.93V13h6.93A8 8 0 0 1 13 19.93");
}
</style><path class="ni8tcwbfl"/>`,
		"fallback": "ic:outline-pie-chart",
	});
}

export default Component;
