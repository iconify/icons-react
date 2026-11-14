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
		"content": `<style>.gvuldygmt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.859 6.785Q1.75 8.912 1.75 12t3.109 5.215Q7.833 19.25 12 19.25t7.141-2.035Q22.25 15.088 22.25 12t-3.109-5.215Q16.167 4.75 12 4.75T4.859 6.785M5.25 12q0-1.881 2.129-3.123Q9.312 7.75 12 7.75t4.621 1.127Q18.75 10.119 18.75 12t-2.129 3.123Q14.688 16.25 12 16.25t-4.621-1.127Q5.25 13.881 5.25 12");
}
</style><path class="gvuldygmt"/>`,
		"fallback": "uix-solid:round-rug",
	});
}

export default Component;
