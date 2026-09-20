import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d74jcgbxc {
  fill: currentColor;
  d: path("M1 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm3.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM4 7.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5M4.5 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z");
}
</style><path class="d74jcgbxc"/>`,
		"fallback": "fluent:slide-text-16-filled",
	});
}

export default Component;
