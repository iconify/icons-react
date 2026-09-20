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
		"content": `<style>.iwulebc2v {
  fill: currentColor;
  d: path("M4 5.5a.5.5 0 0 1 .5-.5h.998a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5zm-5.538-.5a1.5 1.5 0 0 1 1.5-1.5h12.94a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H12v2.015h1.499a.5.5 0 0 1 0 1h-7a.5.5 0 1 1 0-1h1.5V14H3.463a1.5 1.5 0 0 1-1.5-1.5zM9 14v2.015h2V14zM3.462 4a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12.94a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5z");
}
</style><path class="iwulebc2v"/>`,
		"fallback": "fluent:view-desktop-20-regular",
	});
}

export default Component;
