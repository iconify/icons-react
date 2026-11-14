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
		"content": `<style>.edy0_8xaa {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.75 9.5q0 4.811 7.72 12.53q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q7.72-7.719 7.72-12.53q0-3.417-2.416-5.834T12 1.25T6.166 3.666Q3.75 6.083 3.75 9.5m4.909-.219l1.75-1.75q.659-.66 1.591-.66t1.591.66l1.75 1.75q.659.659.659 1.59v1.379q0 2.25-2.25 2.25h-3.5Q8 14.5 8 12.25v-1.379q0-.931.658-1.59z");
}
</style><path class="edy0_8xaa"/>`,
		"fallback": "uix-solid:location-manager",
	});
}

export default Component;
