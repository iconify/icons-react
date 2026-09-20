import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j3_zzybbs {
  fill: currentColor;
  d: path("M14.284 3.241L13.19 4.335a6.5 6.5 0 1 0 1.406 10.261a.75.75 0 0 1 1.06 1.06a8 8 0 1 1-1.372-12.415m-3.296 3.296l1.163-1.163a5.102 5.102 0 0 0-5.757 8.232a5.1 5.1 0 0 0 7.212 0a.75.75 0 1 0-1.06-1.06a3.6 3.6 0 1 1-1.558-6.009M15.78 4.22a.75.75 0 0 1 0 1.06l-4.33 4.331q.049.187.05.389a1.5 1.5 0 1 1-1.111-1.45l4.33-4.33a.75.75 0 0 1 1.061 0m1.47 9.03a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.5 7.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m1.5 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.75-1.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M15 11.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.75-1.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5");
}
</style><path class="j3_zzybbs"/>`,
		"fallback": "fluent:radar-20-filled",
	});
}

export default Component;
