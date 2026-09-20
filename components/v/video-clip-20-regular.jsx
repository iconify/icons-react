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
		"content": `<style>.i999ue55x {
  fill: currentColor;
  d: path("M8.765 7.076A.5.5 0 0 0 8 7.5v5.15a.5.5 0 0 0 .776.417l4-2.649a.5.5 0 0 0-.01-.84zM4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 15.5 3zM3 5.5A1.5 1.5 0 0 1 4.5 4h11A1.5 1.5 0 0 1 17 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5z");
}
</style><path class="i999ue55x"/>`,
		"fallback": "fluent:video-clip-20-regular",
	});
}

export default Component;
