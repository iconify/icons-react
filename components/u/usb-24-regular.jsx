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
		"content": `<style>.t99r-svld {
  fill: currentColor;
  d: path("M11.364 1.852a.75.75 0 0 1 1.272 0l1.249 1.996a.75.75 0 0 1-.636 1.147h-.499V13.5l3.207-3.054A1.75 1.75 0 0 0 16.5 9.18V8.5h-.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75H18v.679c0 .89-.365 1.74-1.009 2.353l-3.698 3.522c-.347.33-.543.788-.543 1.267v1.825a2 2 0 1 1-1.509.003a1.75 1.75 0 0 0-.534-1.095l-3.698-3.522A3.25 3.25 0 0 1 6 11.18v-.85A1.748 1.748 0 0 1 6.75 7a1.75 1.75 0 0 1 .75 3.33v.849c0 .479.196.937.543 1.267L11.25 15.5V4.995h-.499a.75.75 0 0 1-.636-1.147z");
}
</style><path class="t99r-svld"/>`,
		"fallback": "fluent:usb-24-regular",
	});
}

export default Component;
