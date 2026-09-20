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
		"content": `<style>.vgdmglbua {
  fill: currentColor;
  d: path("M7.75 9.25a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5-1.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm0 3.75a.75.75 0 1 0 0 1.5h5.5a.75.75 0 1 0 0-1.5zm-.75 4.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75M8.75 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 4.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75z");
}
</style><path class="vgdmglbua"/>`,
		"fallback": "fluent:text-bullet-list-square-24-regular",
	});
}

export default Component;
