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
		"content": `<style>.q33qrvqit {
  fill: currentColor;
  d: path("M3 3a1 1 0 0 0 0 2v6a3 3 0 0 0 3 3h3.5v2h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-2H14a3 3 0 0 0 3-3V5a1 1 0 1 0 0-2z");
}
</style><path class="q33qrvqit"/>`,
		"fallback": "fluent:projection-screen-20-filled",
	});
}

export default Component;
