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
		"content": `<style>.xptht7bca {
  fill: currentColor;
  d: path("M11.278 10.217a.75.75 0 0 0-1.06 1.06l2.72 2.72l-2.721 2.725a.75.75 0 0 0 1.061 1.06l2.72-2.723l2.724 2.723a.75.75 0 0 0 1.06-1.06l-2.723-2.724l2.723-2.715a.75.75 0 1 0-1.06-1.062l-2.724 2.717zM4.25 5A2.25 2.25 0 0 0 2 7.249v13.5A2.25 2.25 0 0 0 4.25 23h19.5A2.25 2.25 0 0 0 26 20.75V7.25A2.25 2.25 0 0 0 23.75 5zM3.5 7.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75z");
}
</style><path class="xptht7bca"/>`,
		"fallback": "fluent:share-screen-stop-28-regular",
	});
}

export default Component;
