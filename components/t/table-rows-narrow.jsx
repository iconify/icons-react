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
		"content": `<style>.iw4ge6bvv {
  fill: currentColor;
  d: path("M3 15.5V13h18v2.5zM3 11V8.5h18V11zm0-4.5V4h18v2.5zM3 20v-2.5h18V20z");
}
</style><path class="iw4ge6bvv"/>`,
		"fallback": "material-symbols:table-rows-narrow",
	});
}

export default Component;
