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
		"content": `<style>.vv5bz0aqx {
  fill: currentColor;
  d: path("M3 16V8h18v8zm2.5-3.5h4.923v-1H5.5zm9.078.075q.23-.234.23-.578q0-.345-.233-.575q-.234-.23-.578-.23q-.345 0-.575.234q-.23.233-.23.577q0 .345.234.575q.233.23.577.23q.345 0 .575-.233m3 0q.23-.234.23-.578q0-.345-.233-.575q-.234-.23-.578-.23q-.345 0-.575.234q-.23.233-.23.577q0 .345.233.575q.234.23.578.23q.345 0 .575-.233");
}
</style><path class="vv5bz0aqx"/>`,
		"fallback": "material-symbols-light:settop-component",
	});
}

export default Component;
