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
		"content": `<style>.ttafjm6ja {
  fill: currentColor;
  d: path("M2.004 20.25A3.75 3.75 0 0 0 5.754 24H22.25A3.75 3.75 0 0 0 26 20.25V7.75A3.75 3.75 0 0 0 22.25 4H5.755a3.75 3.75 0 0 0-3.75 3.75zm3.75 2.25a2.25 2.25 0 0 1-2.25-2.25V7.75a2.25 2.25 0 0 1 2.25-2.25H9v17z");
}
</style><path class="ttafjm6ja"/>`,
		"fallback": "fluent:panel-left-focus-right-28-filled",
	});
}

export default Component;
