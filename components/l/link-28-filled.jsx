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
		"content": `<style>.a85f4ccxx {
  fill: currentColor;
  d: path("M11 8a1 1 0 0 1 .117 1.993L11 10H8a4 4 0 0 0-.2 7.995L8 18h3a1 1 0 0 1 .117 1.993L11 20H8a6 6 0 0 1-.225-11.996L8 8zm9 0a6 6 0 0 1 .225 11.996L20 20h-3a1 1 0 0 1-.117-1.993L17 18h3a4 4 0 0 0 .2-7.995L20 10h-3a1 1 0 0 1-.117-1.993L17 8zM8 13h12a1 1 0 0 1 .117 1.993L20 15H8a1 1 0 0 1-.117-1.993zh12z");
}
</style><path class="a85f4ccxx"/>`,
		"fallback": "fluent:link-28-filled",
	});
}

export default Component;
