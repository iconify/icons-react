import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ha011g_xc {
  fill: currentColor;
  d: path("M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zM4.5 21.75c0 .966.784 1.75 1.75 1.75h15.5a1.75 1.75 0 0 0 1.75-1.75V16.5h-5.316a4.25 4.25 0 0 1-3.969 3.495L14 20a4.25 4.25 0 0 1-4.142-3.296l-.042-.204H4.5zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25V15h6a.75.75 0 0 1 .743.648l.007.102a2.75 2.75 0 1 0 5.5 0a.75.75 0 0 1 .648-.743L17.5 15h6V6.25a1.75 1.75 0 0 0-1.75-1.75");
}
</style><path class="ha011g_xc"/>`,
		"fallback": "fluent:mail-inbox-28-regular",
	});
}

export default Component;
