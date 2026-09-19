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
		"content": `<style>.axkayxbng {
  fill: currentColor;
  d: path("M18 8h-7l-2 5H6l-4 9h20zM7.3 15h3.05l.5-1.26l1.5-3.74h4.14l2.86 10H5.08zM13 1h2v4h-2zm3.121 4.468L18.95 2.64l1.414 1.414l-2.829 2.828zM7.64 4.05l1.414-1.414l2.828 2.828l-1.414 1.415z");
}
</style><path class="axkayxbng"/>`,
		"fallback": "ic:outline-volcano",
	});
}

export default Component;
