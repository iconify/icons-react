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
		"content": `<style>.ydyepe64d {
  fill: currentColor;
  d: path("M15.72 6.22a.75.75 0 0 1 1.28.53v13.5a.75.75 0 1 1-1.5 0V8.56l-4.97 4.97a.75.75 0 0 1-1.06 0L4.5 8.56v11.69a.75.75 0 0 1-1.5 0V6.75a.751.751 0 0 1 1.28-.53L10 11.94zM22.75 6a.75.75 0 0 1 .75.75v11.69l1.72-1.72a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06L22 18.44V6.75a.75.75 0 0 1 .75-.75");
}
</style><path class="ydyepe64d"/>`,
		"fallback": "fluent:markdown-28-regular",
	});
}

export default Component;
