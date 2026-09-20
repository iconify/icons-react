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
		"content": `<style>.z_kshgb_j {
  fill: currentColor;
  d: path("M4 21q-.825 0-1.412-.587T2 19V7q0-.825.588-1.412T4 5h3.15L9 3h6l1.85 2H20q.825 0 1.413.588T22 7v12q0 .825-.587 1.413T20 21zm2-4h12l-3.75-5l-3 4L9 13z");
}
</style><path class="z_kshgb_j"/>`,
		"fallback": "material-symbols:photo-camera-back",
	});
}

export default Component;
