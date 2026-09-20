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
		"content": `<style>.lhkuyccay {
  fill: currentColor;
  d: path("M10 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0zM4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4v-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4V4zm7 0v1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z");
}
</style><path class="lhkuyccay"/>`,
		"fallback": "fluent:split-vertical-20-regular",
	});
}

export default Component;
