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
		"content": `<style>.s3-6ovc4r {
  fill: currentColor;
  d: path("M4 9V8h1v1zM1 4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6.5a.5.5 0 0 0 1 0V4a2 2 0 0 1 2 2v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5zm2.5 1a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zm4 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z");
}
</style><path class="s3-6ovc4r"/>`,
		"fallback": "fluent:news-16-filled",
	});
}

export default Component;
