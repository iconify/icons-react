import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uj86bdbdj {
  fill: currentColor;
  d: path("M14.75 9a6.25 6.25 0 0 0-6.25 6.25v12.5A6.25 6.25 0 0 0 14.75 34h12A6.25 6.25 0 0 0 33 27.75v-12.5A6.25 6.25 0 0 0 26.75 9zM6.5 15.25q0-.258.016-.512A6.24 6.24 0 0 0 4 19.75v8C4 33.687 8.813 38.5 14.75 38.5h7.5a6.24 6.24 0 0 0 5.012-2.516q-.255.015-.512.016h-12a8.25 8.25 0 0 1-8.25-8.25zm37.499-.994c0-2.611-2.924-4.157-5.081-2.686l-3.915 2.67v14.522l3.915 2.67c2.157 1.47 5.08-.075 5.08-2.686z");
}
</style><path class="uj86bdbdj"/>`,
		"fallback": "fluent:video-multiple-48-filled",
	});
}

export default Component;
