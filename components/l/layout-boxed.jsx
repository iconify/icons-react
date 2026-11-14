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
		"content": `<style>.ox-kilb5q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.375 2.75h-4.75q-2.848 0-4.861 2.014T2.75 9.625v4.75q0 2.848 2.014 4.861t4.861 2.014h4.75q2.848 0 4.861-2.014t2.014-4.861v-4.75q0-2.848-2.014-4.861T14.375 2.75m-3.75 4.5h2.75q3.375 0 3.375 3.375v2.75q0 3.375-3.375 3.375h-2.75q-3.375 0-3.375-3.375v-2.75q0-3.375 3.375-3.375");
}
</style><path class="ox-kilb5q"/>`,
		"fallback": "uix-solid:layout-boxed",
	});
}

export default Component;
