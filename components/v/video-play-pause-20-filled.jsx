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
		"content": `<style>.v1a3fb5lo {
  fill: currentColor;
  d: path("M11.5 5A1.5 1.5 0 0 0 10 6.5v7a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 5zm5 0A1.5 1.5 0 0 0 15 6.5v7a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 17.5 5zm-12.574.45A1.25 1.25 0 0 0 2 6.503V13.5a1.25 1.25 0 0 0 1.916 1.057l5.496-3.461a1.25 1.25 0 0 0 .01-2.11z");
}
</style><path class="v1a3fb5lo"/>`,
		"fallback": "fluent:video-play-pause-20-filled",
	});
}

export default Component;
