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
		"content": `<style>.mbflgx3yd {
  fill: currentColor;
  d: path("M3 20.808v-11h4V3.192h14v11h-4v6.616zm1-1h12v-7H4zm13-6.616h3v-7H8v3.616h9z");
}
</style><path class="mbflgx3yd"/>`,
		"fallback": "material-symbols-light:select-window-outline-sharp",
	});
}

export default Component;
