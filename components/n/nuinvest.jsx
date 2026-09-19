import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oj8t8b0hd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 14.007v11.248c0 4.083-2.857 7.37-6.406 7.37s-6.406-3.287-6.406-7.37V14.007h-4.85v13.025c0 4.084 2.857 7.37 6.406 7.37h0c3.548 0 6.406-3.286 6.406-7.37V14.006zm-39 19.985V22.744c0-4.083 2.858-7.37 6.407-7.37s6.405 3.287 6.405 7.37v11.248h4.85V20.968c0-4.084-2.857-7.37-6.406-7.37h0c-3.548 0-6.406 3.286-6.406 7.37v13.026z");
}
</style><path class="oj8t8b0hd"/>`,
		"fallback": "arcticons:nuinvest",
	});
}

export default Component;
