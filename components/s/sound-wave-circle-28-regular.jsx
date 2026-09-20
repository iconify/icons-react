import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t6le2gb_k {
  fill: currentColor;
  d: path("M14 3.5C8.201 3.5 3.5 8.201 3.5 14S8.201 24.5 14 24.5S24.5 19.799 24.5 14S19.799 3.5 14 3.5M2 14C2 7.373 7.373 2 14 2s12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14m10.25-5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75M9.5 12.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0zM15.75 11a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75M20 9.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="t6le2gb_k"/>`,
		"fallback": "fluent:sound-wave-circle-28-regular",
	});
}

export default Component;
