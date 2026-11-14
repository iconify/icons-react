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
		"content": `<style>.ce3e7wp_c {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.5 6q0-3.25 4-3.25t4 3.25t-4 3.25t-4-3.25M12 8.75q-4 0-4 3.25t4 3.25T16 12q0-1.405-1.245-2.362Q13.601 8.75 12 8.75M1.5 18q0-3.25 4-3.25t4 3.25t-4 3.25t-4-3.25");
}
</style><path class="ce3e7wp_c"/>`,
		"fallback": "uix-solid:kata-footprints",
	});
}

export default Component;
