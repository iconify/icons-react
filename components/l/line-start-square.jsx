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
		"content": `<style>.d5ady_bcq {
  fill: currentColor;
  d: path("M11.423 15.923H3.577V8.077h7.846V11.5h9.5v1h-9.5z");
}
</style><path class="d5ady_bcq"/>`,
		"fallback": "material-symbols-light:line-start-square",
	});
}

export default Component;
