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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.j821nwk3b {
  d: path("M9 2a4.5 4.5 0 0 0-4.5 4.5v9.4c0 .98.626 1.813 1.5 2.122V6.5a3 3 0 0 1 3-3h5.002A2.25 2.25 0 0 0 11.88 2z");
}

.vkawh-7sb {
  d: path("M7 6.75A2.25 2.25 0 0 1 9.25 4.5H15V2.75a.75.75 0 0 1 1.5 0v18.5a.75.75 0 0 1-1.5 0V20H9.25A2.25 2.25 0 0 1 7 17.75zm8 11.75V6H9.25a.75.75 0 0 0-.75.75v11c0 .414.336.75.75.75z");
}
</style><g class="cuyn6tgcc"><path class="j821nwk3b"/><path class="vkawh-7sb"/></g>`,
		"fallback": "fluent:notebook-subsection-24-regular",
	});
}

export default Component;
