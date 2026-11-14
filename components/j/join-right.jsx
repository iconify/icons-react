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
		"content": `<style>.ku47g_1im {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.25 12q0-2.796 1.977-4.773T8 5.25q2.27 0 4 1.303q1.73-1.303 4-1.303q2.796 0 4.773 1.977T22.75 12t-1.977 4.773T16 18.75q-2.27 0-4-1.303q-1.73 1.303-4 1.303q-2.796 0-4.773-1.977T1.25 12M19 7.75q-1.75 0-1.75 1.75T19 11.25t1.75-1.75T19 7.75M10.25 12q0-1.75 1.75-1.75T13.75 12T12 13.75T10.25 12m7 2.5q0 1.75 1.75 1.75t1.75-1.75T19 12.75t-1.75 1.75");
}
</style><path class="ku47g_1im"/>`,
		"fallback": "uix-solid:join-right",
	});
}

export default Component;
