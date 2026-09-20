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
		"content": `<style>.vttblob4q {
  fill: currentColor;
  d: path("M6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3m6.5 1.5h-6.5A2.25 2.25 0 0 0 4.5 6.75v6.5h8.75zM4.5 14.75v6.5a2.25 2.25 0 0 0 2.25 2.25h6.5v-8.75zm10.25 8.75h6.5a2.25 2.25 0 0 0 2.25-2.25v-6.5h-8.75zm8.75-10.25v-6.5a2.25 2.25 0 0 0-2.25-2.25h-6.5v8.75z");
}
</style><path class="vttblob4q"/>`,
		"fallback": "fluent:table-simple-28-regular",
	});
}

export default Component;
