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
		"content": `<style>.j5gso7bdq {
  fill: currentColor;
  d: path("M34.625 6.125a7.5 7.5 0 0 1 7.5 7.5v9a1.5 1.5 0 0 1-3 0v-9a4.5 4.5 0 0 0-4.5-4.5h-21.25a4.5 4.5 0 0 0-4.5 4.5v21a4.5 4.5 0 0 0 4.5 4.5h9.25a1.5 1.5 0 0 1 0 3h-9.25a7.5 7.5 0 0 1-7.5-7.5v-21a7.5 7.5 0 0 1 7.5-7.5zM18 19.5a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 0 3h-9.379l14.44 14.44a1.5 1.5 0 0 1-2.122 2.12L21 23.122V32.5a1.5 1.5 0 0 1-3 0z");
}
</style><path class="j5gso7bdq"/>`,
		"fallback": "fluent:open-folder-48-filled",
	});
}

export default Component;
