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
		"content": `<style>.klftbrbwc {
  fill: currentColor;
  d: path("M9.5 14a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m7.6 7.619c.763.235 1.714.381 2.9.381c6 0 6-3.75 6-3.75A2.25 2.25 0 0 0 23.75 16h-6.656a3.24 3.24 0 0 1 .904 2.25v.555l-.003.083a5.5 5.5 0 0 1-.154.99a6.1 6.1 0 0 1-.74 1.74M23.5 10.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M2 18.25A2.25 2.25 0 0 1 4.25 16h10.5A2.25 2.25 0 0 1 17 18.25v.5S17 24 9.5 24S2 18.75 2 18.75z");
}
</style><path class="klftbrbwc"/>`,
		"fallback": "fluent:people-28-filled",
	});
}

export default Component;
