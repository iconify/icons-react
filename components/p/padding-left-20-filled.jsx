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
		"content": `<style>.f3pjaacds {
  fill: currentColor;
  d: path("M2.75 3.75A.75.75 0 0 0 2 4.5v1.313a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 0-.75-.75m0 3.938a.75.75 0 0 0-.75.75v2.624a.75.75 0 0 0 1.5 0V8.439a.75.75 0 0 0-.75-.75m0 5.25a.75.75 0 0 0-.75.75V15a.75.75 0 0 0 1.5 0v-1.312a.75.75 0 0 0-.75-.75m14.5-9.188a.75.75 0 0 0-.75.75V15a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 0-.75-.75M4.72 10.28a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 1 1 1.06 1.06L7.06 9h7.19a.75.75 0 0 1 0 1.5H7.06l2.97 2.97a.75.75 0 1 1-1.06 1.06z");
}
</style><path class="f3pjaacds"/>`,
		"fallback": "fluent:padding-left-20-filled",
	});
}

export default Component;
