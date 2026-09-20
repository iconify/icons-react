import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bh5h2lb5j {
  fill: currentColor;
  d: path("M12.987 3.952A3.25 3.25 0 0 1 15.285 3h6.965A2.75 2.75 0 0 1 25 5.75v6.964a3.25 3.25 0 0 1-.377 1.52a7.5 7.5 0 0 0-10.346 10.453a3.25 3.25 0 0 1-4.076-.424l-6.464-6.465a3.25 3.25 0 0 1 0-4.596zM19.5 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21z");
}
</style><path class="bh5h2lb5j"/>`,
		"fallback": "fluent:tag-add-28-filled",
	});
}

export default Component;
