import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e4ocjtj6y {
  fill: currentColor;
  d: path("M7.25 2A3.25 3.25 0 0 0 4 5.25v21.5A3.25 3.25 0 0 0 7.25 30h16.5A3.25 3.25 0 0 0 27 26.75V5.25A3.25 3.25 0 0 0 23.75 2zM10 7h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1m18 1h1.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H28zm1.25 6H28v4h1.25a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75M28 20h1.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H28z");
}
</style><path class="e4ocjtj6y"/>`,
		"fallback": "fluent:notebook-32-filled",
	});
}

export default Component;
