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
		"content": `<style>.tyg02jyrq {
  fill: currentColor;
  d: path("M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4zm2.646 3.146a.5.5 0 0 1 .708 0L10 9.293l2.146-2.147a.5.5 0 0 1 .708.708L10.707 10l2.147 2.146a.5.5 0 0 1-.708.708L10 10.707l-2.146 2.147a.5.5 0 0 1-.708-.707L9.293 10L7.146 7.854a.5.5 0 0 1 0-.708");
}
</style><path class="tyg02jyrq"/>`,
		"fallback": "fluent:share-screen-stop-20-filled",
	});
}

export default Component;
