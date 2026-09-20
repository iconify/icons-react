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
		"content": `<style>.izupb5msc {
  fill: currentColor;
  d: path("M9 21q-2.5 0-4.25-1.75T3 15V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v6q0 2.5-1.75 4.25T15 21zm2-5l6-6l-1.4-1.4l-4.6 4.6L8.8 11l-1.4 1.4zm-2 3h6q1.65 0 2.825-1.175T19 15V9q0-1.65-1.175-2.825T15 5H9Q7.35 5 6.175 6.175T5 9v6q0 1.65 1.175 2.825T9 19m3-7");
}
</style><path class="izupb5msc"/>`,
		"fallback": "material-symbols:priority-outline-sharp",
	});
}

export default Component;
