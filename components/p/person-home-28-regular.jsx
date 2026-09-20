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
		"content": `<style>.ubt_btbtm {
  fill: currentColor;
  d: path("M19.2 14.48a2 2 0 0 1 2.6 0l4.5 3.856a2 2 0 0 1 .7 1.519v5.647a1.5 1.5 0 0 1-1.5 1.5H24a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5v-5.647a2 2 0 0 1 .7-1.52zm-5.063 3.02H7a1.5 1.5 0 0 0-1.493 1.355L5.5 19v.715c0 2.496 2.952 4.5 7.5 4.756v1.03q.001.243.046.474C7.754 25.708 4 23.225 4 19.715V19a3 3 0 0 1 3-3h8.888zM14 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12m0 1.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9");
}
</style><path class="ubt_btbtm"/>`,
		"fallback": "fluent:person-home-28-regular",
	});
}

export default Component;
