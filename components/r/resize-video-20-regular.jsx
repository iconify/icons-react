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
		"content": `<style>.f4boacaee {
  fill: currentColor;
  d: path("M5 2a3 3 0 0 0-3 3v3.5a.5.5 0 0 0 1 0V5a2 2 0 0 1 2-2h3.5a.5.5 0 0 0 0-1zm6.5 0a.5.5 0 0 0 0 1H15a2 2 0 0 1 2 2v3.5a.5.5 0 0 0 1 0V5a3 3 0 0 0-3-3zm6.5 9.5a.5.5 0 0 0-1 0V15a2 2 0 0 1-2 2h-3.5a.5.5 0 0 0 0 1H15a3 3 0 0 0 3-3zM3.5 10A2.5 2.5 0 0 0 1 12.5v4A2.5 2.5 0 0 0 3.5 19h4a2.5 2.5 0 0 0 2.5-2.5v-4A2.5 2.5 0 0 0 7.5 10zm.724 2.553l3 1.5a.5.5 0 0 1 0 .894l-3 1.5A.5.5 0 0 1 3.5 16v-3a.5.5 0 0 1 .724-.447");
}
</style><path class="f4boacaee"/>`,
		"fallback": "fluent:resize-video-20-regular",
	});
}

export default Component;
