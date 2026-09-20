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
		"content": `<style>.kcbfxab_n {
  fill: currentColor;
  d: path("M2.75 12.998a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5zM21.25 2A2.75 2.75 0 0 1 24 4.75v7.248H4V4.75A2.75 2.75 0 0 1 6.75 2zM4 22.75v-7.252h20v7.252a2.75 2.75 0 0 1-2.75 2.75H6.75A2.75 2.75 0 0 1 4 22.75");
}
</style><path class="kcbfxab_n"/>`,
		"fallback": "fluent:split-horizontal-28-filled",
	});
}

export default Component;
