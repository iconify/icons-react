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
		"content": `<style>.bnyqwoobk {
  fill: currentColor;
  d: path("M8 10.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m.5-9a.5.5 0 0 0-1 0v1.525A5 5 0 0 0 3.025 7.5H1.5a.5.5 0 0 0 0 1h1.525A5 5 0 0 0 7.5 12.976V14.5a.5.5 0 0 0 1 0v-1.524A5 5 0 0 0 12.975 8.5H14.5a.5.5 0 1 0 0-1h-1.525A5 5 0 0 0 8.5 3.025zM8 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8");
}
</style><path class="bnyqwoobk"/>`,
		"fallback": "fluent:my-location-16-regular",
	});
}

export default Component;
