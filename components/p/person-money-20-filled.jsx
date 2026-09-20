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
		"content": `<style>.fgst7jatv {
  fill: currentColor;
  d: path("M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-4.991 9A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.183 17.465 7.53 17.845 9 17.96V14a2 2 0 0 1 2-2h5.732A2 2 0 0 0 15 11zM19 14.5v3a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5m-1 3v-1a1.5 1.5 0 0 0-1.5 1.5h1a.5.5 0 0 1 .5-.5m0-3a.5.5 0 0 1-.5-.5h-1a1.5 1.5 0 0 0 1.5 1.5zm-6.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zm-.5 3.5a.5.5 0 0 1 .5.5h1a1.5 1.5 0 0 0-1.5-1.5zm3.5-3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3");
}
</style><path class="fgst7jatv"/>`,
		"fallback": "fluent:person-money-20-filled",
	});
}

export default Component;
