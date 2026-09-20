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
		"content": `<style>.vr3uk3bxq {
  fill: currentColor;
  d: path("M17 5.5a2.5 2.5 0 0 1-4.467 1.543L7.915 9.352a2.5 2.5 0 0 1 0 1.297l4.618 2.308a2.5 2.5 0 1 1-.448.894l-4.618-2.308a2.5 2.5 0 1 1 0-3.085l4.618-2.31A2.504 2.504 0 0 1 14.5 3A2.5 2.5 0 0 1 17 5.5");
}
</style><path class="vr3uk3bxq"/>`,
		"fallback": "fluent:share-android-20-filled",
	});
}

export default Component;
