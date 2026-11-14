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
		"content": `<style>.y38l8wbpk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13 1.75h-2Q8.75 1.75 8.75 4q0 1.061.5 1.621V8q0 .298-.939 1.06Q6.25 10.734 6.25 12.5V20q0 2.25 2.25 2.25h7q2.25 0 2.25-2.25v-7.5q0-1.766-2.061-3.44q-.939-.762-.939-1.06V5.621q.5-.56.5-1.621q0-2.25-2.25-2.25m3.25 15.5h-8.5v-2.5h8.5zm-8.5 1.5h8.5V20q0 .75-.75.75h-7q-.75 0-.75-.75zm0-5.5v-.75q0-1.052 1.507-2.276Q10.75 9.012 10.75 8V6.243q.121.007.25.007h2q.129 0 .25-.007V8q0 1.012 1.493 2.224q1.507 1.224 1.507 2.276v.75z");
}
</style><path class="y38l8wbpk"/>`,
		"fallback": "uix-solid:juice-bottle",
	});
}

export default Component;
