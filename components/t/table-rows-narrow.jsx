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
		"content": `<style>.lkot58gix {
  fill: currentColor;
  d: path("M4 15.635V12.5h16v3.135zM4 11.5V8.366h16V11.5zm0-4.134V4.23h16v3.135zm0 12.403v-3.134h16v3.134z");
}
</style><path class="lkot58gix"/>`,
		"fallback": "material-symbols-light:table-rows-narrow",
	});
}

export default Component;
