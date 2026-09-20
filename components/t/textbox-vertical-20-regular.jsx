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
		"content": `<style>.aeitds6ju {
  d: path("M13 6.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z");
  fill: currentColor;
}

.fg3yks6_w {
  d: path("M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9zm-1 0v-9A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5z");
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.g_6rjbc1e {
  d: path("M10 6.5a.5.5 0 1 0-1 0v4a.5.5 0 0 0 1 0v-4z");
  fill: currentColor;
}

.uyeh72b9q {
  d: path("M7 6.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="aeitds6ju"/><path class="g_6rjbc1e"/><path class="uyeh72b9q"/><path class="fg3yks6_w"/></g>`,
		"fallback": "fluent:textbox-vertical-20-regular",
	});
}

export default Component;
