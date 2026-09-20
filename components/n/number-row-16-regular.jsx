import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lqz6wobwg {
  fill: currentColor;
  d: path("M4 5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5A.5.5 0 0 1 4 5M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM2 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm9.5 1a.5.5 0 0 0 0 1h.5v1.5h-.5a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1H12V8.5h.5A.5.5 0 0 0 13 8V5.5a.5.5 0 0 0-.5-.5zM11 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z");
}
</style><path class="lqz6wobwg"/>`,
		"fallback": "fluent:number-row-16-regular",
	});
}

export default Component;
