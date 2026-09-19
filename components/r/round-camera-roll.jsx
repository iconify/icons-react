import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jw22x0yis {
  fill: currentColor;
  d: path("M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h6c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 13h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2z");
}
</style><path class="jw22x0yis"/>`,
		"fallback": "ic:round-camera-roll",
	});
}

export default Component;
