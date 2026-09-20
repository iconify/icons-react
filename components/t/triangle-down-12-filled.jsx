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
		"content": `<style>.lbpg0khtn {
  fill: currentColor;
  d: path("M5.214 10.541a.903.903 0 0 0 1.572 0l4.092-7.169C11.226 2.762 10.789 2 10.09 2H1.91c-.698 0-1.135.762-.787 1.372z");
}
</style><path class="lbpg0khtn"/>`,
		"fallback": "fluent:triangle-down-12-filled",
	});
}

export default Component;
