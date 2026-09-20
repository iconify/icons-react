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
		"content": `<style>.pgim9d69p {
  fill: currentColor;
  d: path("M14 2a.75.75 0 0 1 .75.75v1.496a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 14 2m6 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0m5.25.75a.75.75 0 0 0 0-1.5h-1.496a.75.75 0 0 0 0 1.5zM14 23.004a.75.75 0 0 1 .75.75v1.496a.75.75 0 0 1-1.5 0v-1.496a.75.75 0 0 1 .75-.75M4.25 14.75a.75.75 0 0 0 0-1.5H2.751a.75.75 0 0 0 0 1.5zm.97-9.531a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06m1.06 17.56a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 1.06zm16.5-17.56a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06M21.72 22.78a.75.75 0 0 0 1.06-1.06l-1.5-1.5a.75.75 0 0 0-1.06 1.06z");
}
</style><path class="pgim9d69p"/>`,
		"fallback": "fluent:weather-sunny-28-filled",
	});
}

export default Component;
