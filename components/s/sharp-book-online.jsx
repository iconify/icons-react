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
		"content": `<style>.txrf_ibow {
  fill: currentColor;
  d: path("M19 1H5v22h14zM7 18V6h10v12zm9-7V8H8v3.1c.55 0 1 .45 1 1s-.45 1-1 1V16h8v-3c-.55 0-1-.45-1-1s.45-1 1-1m-3.5 3.5h-1v-1h1zm0-2h-1v-1h1zm0-2h-1v-1h1z");
}
</style><path class="txrf_ibow"/>`,
		"fallback": "ic:sharp-book-online",
	});
}

export default Component;
