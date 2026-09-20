import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hfuaovbuu {
  fill: currentColor;
  d: path("M1.459 5.214a.903.903 0 0 0 0 1.572l7.169 4.092c.61.348 1.372-.089 1.372-.787V1.91c0-.698-.762-1.135-1.372-.787z");
}
</style><path class="hfuaovbuu"/>`,
		"fallback": "fluent:triangle-left-12-filled",
	});
}

export default Component;
