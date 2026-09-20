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
		"content": `<style>.r7jhiy9fq {
  fill: currentColor;
  d: path("M6 10a1 1 0 1 1 2 0a1 1 0 0 1-2 0m6 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm7 4a2 2 0 0 0-.268-1h2.536A2 2 0 1 0 13 8H7a2 2 0 1 0 2 2");
}
</style><path class="r7jhiy9fq"/>`,
		"fallback": "fluent:voicemail-20-filled",
	});
}

export default Component;
