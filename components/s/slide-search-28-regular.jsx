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
		"content": `<style>.r4juccbui {
  fill: currentColor;
  d: path("M2.004 7.25A3.25 3.25 0 0 1 5.254 4h17.497a3.25 3.25 0 0 1 3.25 3.25v13.5a3.25 3.25 0 0 1-3.25 3.25h-8.276l-1.5-1.5h9.776a1.75 1.75 0 0 0 1.75-1.75V7.25a1.75 1.75 0 0 0-1.75-1.75H5.254a1.75 1.75 0 0 0-1.75 1.75v5.48c-.55.287-1.055.65-1.5 1.075zm9.62 7.25A6.5 6.5 0 0 0 9.966 13H20.25a.75.75 0 0 1 0 1.5zm1.376 4h5.25a.75.75 0 0 0 0-1.5h-5.424q.172.724.174 1.5M7 9.75A.75.75 0 0 1 7.75 9h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7 9.75m3.883 12.073a5.5 5.5 0 1 0-1.06 1.06l2.897 2.897a.75.75 0 1 0 1.06-1.06zM10.5 18.5a4 4 0 1 1-8 0a4 4 0 0 1 8 0");
}
</style><path class="r4juccbui"/>`,
		"fallback": "fluent:slide-search-28-regular",
	});
}

export default Component;
