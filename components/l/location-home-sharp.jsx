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
		"content": `<style>.d7oksvb_v {
  fill: currentColor;
  d: path("M13.77 13.772q.73-.729.73-1.77t-.728-1.771t-1.77-.731t-1.771.729t-.731 1.769t.729 1.771t1.769.731t1.771-.728M6 19h12v-.179q0-.357-.15-.663t-.43-.5q-1.207-.852-2.6-1.294q-1.394-.441-2.878-.441q-1.45 0-2.812.451t-2.541 1.304q-.289.193-.439.5T6 18.84zm-1 1V9.5l7-5.27l7 5.27V20z");
}
</style><path class="d7oksvb_v"/>`,
		"fallback": "material-symbols-light:location-home-sharp",
	});
}

export default Component;
