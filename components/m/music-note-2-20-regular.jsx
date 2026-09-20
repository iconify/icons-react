import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w9uh9ppaq {
  fill: currentColor;
  d: path("M14.702 2.226A1 1 0 0 1 16 3.18V13.5a2.5 2.5 0 1 1-1-2V6.18L8 8.368V15.5a2.5 2.5 0 1 1-1-2V5.368a1 1 0 0 1 .702-.955zM8 7.32l7-2.187V3.18L8 5.368zM5.5 14a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m6.5-.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0");
}
</style><path class="w9uh9ppaq"/>`,
		"fallback": "fluent:music-note-2-20-regular",
	});
}

export default Component;
