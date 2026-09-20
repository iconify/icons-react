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
		"content": `<style>.pwdk8izio {
  fill: currentColor;
  d: path("M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2.5 0a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z");
}
</style><path class="pwdk8izio"/>`,
		"fallback": "fluent:phone-status-bar-20-filled",
	});
}

export default Component;
