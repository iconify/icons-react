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
		"content": `<style>.ozab_wb9v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.935 9.143L9.81 4.132q2.19-1.866 4.38 0l5.875 5.011q1.185 1.011 1.185 2.568v6.164q0 3.375-3.375 3.375H6.125q-3.375 0-3.375-3.375v-6.164q0-1.557 1.185-2.568m6.815 2.607h2.5V10.5q0-1.25-1.25-1.25t-1.25 1.25zm4 .2V10.5q0-2.75-2.75-2.75T9.25 10.5v1.377q-1.5.437-1.5 2.373v1.5q0 2.5 2.5 2.5h3.5q1.036 0 1.768-.732t.732-1.768v-1.5q0-1.036-.732-1.768q-.35-.349-.768-.532");
}
</style><path class="ozab_wb9v"/>`,
		"fallback": "uix-solid:lockdown",
	});
}

export default Component;
