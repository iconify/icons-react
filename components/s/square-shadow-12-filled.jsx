import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u9c6ii1vp {
  fill: currentColor;
  d: path("M3 1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2a2 2 0 0 0 2 2h3.5A2.5 2.5 0 0 0 11 8.5V5a2 2 0 0 0-2-2a2 2 0 0 0-2-2zm-.5 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z");
}
</style><path class="u9c6ii1vp"/>`,
		"fallback": "fluent:square-shadow-12-filled",
	});
}

export default Component;
