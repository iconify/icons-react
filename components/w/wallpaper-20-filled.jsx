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
		"content": `<style>.jfo4gzp4n {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h2.25a.75.75 0 0 1 0 1.5H6A1.5 1.5 0 0 0 4.5 6v2.25a.75.75 0 0 1-1.5 0zm8-2.25a.75.75 0 0 1 .75-.75H14a3 3 0 0 1 3 3v2.25a.75.75 0 0 1-1.5 0V6A1.5 1.5 0 0 0 14 4.5h-2.25a.75.75 0 0 1-.75-.75M3.75 11a.75.75 0 0 1 .75.75V14q.001.202.05.389l3.682-3.682a2.5 2.5 0 0 1 3.536 0l3.681 3.682q.05-.187.051-.389v-2.25a.75.75 0 0 1 1.5 0V14a3 3 0 0 1-3 3h-2.25a.75.75 0 0 1 0-1.5H14q.202-.001.389-.05l-3.682-3.682a1 1 0 0 0-1.414 0L5.61 15.449q.187.05.389.051h2.25a.75.75 0 0 1 0 1.5H6a3 3 0 0 1-3-3v-2.25a.75.75 0 0 1 .75-.75M14 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}
</style><path class="jfo4gzp4n"/>`,
		"fallback": "fluent:wallpaper-20-filled",
	});
}

export default Component;
