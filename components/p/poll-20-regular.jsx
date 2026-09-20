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
		"content": `<style>.zsscgqbdo {
  fill: currentColor;
  d: path("M8 4a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0zm2-1a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1m-8 9a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0zm2-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m12-5a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2m-1 2a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0z");
}
</style><path class="zsscgqbdo"/>`,
		"fallback": "fluent:poll-20-regular",
	});
}

export default Component;
