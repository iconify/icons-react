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
		"content": `<style>.avwialbpr {
  fill: currentColor;
  d: path("M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m5.5-2.5A.5.5 0 0 1 7 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5M12 6a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0zM4 7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 4 7m5.5 0a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0z");
}
</style><path class="avwialbpr"/>`,
		"fallback": "fluent:sound-wave-circle-16-regular",
	});
}

export default Component;
