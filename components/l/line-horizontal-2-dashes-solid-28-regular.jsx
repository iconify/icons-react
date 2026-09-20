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
		"content": `<style>.a95e07reb {
  fill: currentColor;
  d: path("M2.75 9a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm9 0a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm9 0a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm-18 8a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="a95e07reb"/>`,
		"fallback": "fluent:line-horizontal-2-dashes-solid-28-regular",
	});
}

export default Component;
