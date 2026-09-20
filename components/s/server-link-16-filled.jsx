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
		"content": `<style>.hn_s6h2gu {
  fill: currentColor;
  d: path("M11.414 1.586A2 2 0 0 0 10 1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h.05A3.5 3.5 0 0 1 8.5 9H12V3a2 2 0 0 0-.586-1.414M9.853 4.854A.5.5 0 0 1 9.499 5h-3a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .354.854M8.5 10a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5");
}
</style><path class="hn_s6h2gu"/>`,
		"fallback": "fluent:server-link-16-filled",
	});
}

export default Component;
