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
		"content": `<style>.nrhwhdtsn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2.75h6.5q2.75 0 2.75 2.75v13q0 2.75-2.75 2.75h-13q-2.75 0-2.75-2.75v-13q0-1.139.805-1.945q.806-.805 1.945-.805zm.75 17h5.75q1.25 0 1.25-1.25v-13q0-1.25-1.25-1.25h-5.75z");
}
</style><path class="nrhwhdtsn"/>`,
		"fallback": "uix-solid:square-half",
	});
}

export default Component;
