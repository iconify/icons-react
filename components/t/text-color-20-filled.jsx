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
		"content": `<style>.t7fxw3bav {
  fill: currentColor;
  d: path("M15.5 12a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-3A1.5 1.5 0 0 1 4.5 12zM10 1.5a.75.75 0 0 1 .696.472l3 7.5a.75.75 0 0 1-1.392.556L11.492 8H8.508l-.812 2.028a.75.75 0 1 1-1.392-.556l3-7.5l.05-.103A.75.75 0 0 1 10 1.5m-.893 5h1.786L10 4.269z");
}
</style><path class="t7fxw3bav"/>`,
		"fallback": "fluent:text-color-20-filled",
	});
}

export default Component;
