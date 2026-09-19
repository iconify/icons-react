import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dyzj50unz {
  fill: currentColor;
  d: path("M1 5h2v14H1zm4 0h2v14H5zm18 0H9v14h14zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17z");
}
</style><path class="dyzj50unz"/>`,
		"fallback": "ic:sharp-burst-mode",
	});
}

export default Component;
