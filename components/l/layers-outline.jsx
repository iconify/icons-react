import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u7jb4yfrl {
  fill: currentColor;
  d: path("m12 21.05l-9-7l1.65-1.25L12 18.5l7.35-5.7L21 14.05zM12 16L3 9l9-7l9 7zm0-2.55L17.75 9L12 4.55L6.25 9z");
}
</style><path class="u7jb4yfrl"/>`,
		"fallback": "material-symbols:layers-outline",
	});
}

export default Component;
