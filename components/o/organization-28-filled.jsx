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
		"content": `<style>.t0n1_9b9p {
  fill: currentColor;
  d: path("M9.75 6.248a4.25 4.25 0 1 1 5 4.184V13.5h4.5a2.25 2.25 0 0 1 2.25 2.25v1.816a4.251 4.251 0 1 1-1.5 0V15.75a.75.75 0 0 0-.75-.75H8.75a.75.75 0 0 0-.75.75v1.816a4.251 4.251 0 1 1-1.5 0V15.75a2.25 2.25 0 0 1 2.25-2.25h4.5v-3.068a4.25 4.25 0 0 1-3.5-4.184");
}
</style><path class="t0n1_9b9p"/>`,
		"fallback": "fluent:organization-28-filled",
	});
}

export default Component;
