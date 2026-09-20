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
		"content": `<style>.ypzr25m_v {
  fill: currentColor;
  d: path("M3 5.75A.75.75 0 0 1 3.75 5h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 3 5.75m13 0a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m-13 4A.75.75 0 0 1 3.75 9h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 3 9.75m13 0a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m-13 4a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75m13 0a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m-13 4a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75m13 0a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75");
}
</style><path class="ypzr25m_v"/>`,
		"fallback": "fluent:text-column-two-right-24-regular",
	});
}

export default Component;
