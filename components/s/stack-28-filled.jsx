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
		"content": `<style>.hvk8dlbep {
  fill: currentColor;
  d: path("M2.004 6.75A2.75 2.75 0 0 1 4.754 4h12.5a2.75 2.75 0 0 1 2.75 2.75v8.5a2.75 2.75 0 0 1-2.75 2.75h-12.5a2.75 2.75 0 0 1-2.75-2.75zM7.754 21a2.75 2.75 0 0 1-2.45-1.5h11.95a4.25 4.25 0 0 0 4.25-4.25V7.3a2.75 2.75 0 0 1 1.5 2.45v5.5a5.75 5.75 0 0 1-5.75 5.75zm.55 1.5a2.75 2.75 0 0 0 2.45 1.5h6.5a8.75 8.75 0 0 0 8.75-8.75v-2.5a2.75 2.75 0 0 0-1.5-2.45v4.95a7.25 7.25 0 0 1-7.25 7.25z");
}
</style><path class="hvk8dlbep"/>`,
		"fallback": "fluent:stack-28-filled",
	});
}

export default Component;
