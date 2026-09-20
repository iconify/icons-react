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
		"content": `<style>.vc0qu0-fi {
  fill: currentColor;
  d: path("M6.5 5h3a.5.5 0 1 0 0-1h-3a.5.5 0 1 0 0 1M6 15h.05a3.5 3.5 0 0 1-.894-1.464A1 1 0 0 1 5 13V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6h1V3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2m2.5-5a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5");
}
</style><path class="vc0qu0-fi"/>`,
		"fallback": "fluent:server-link-16-regular",
	});
}

export default Component;
