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
		"content": `<style>.rj6xlccuw {
  fill: currentColor;
  d: path("M16 1H2v16h2V3h12zm5 4H6v18h15zm-2 16H8V7h11z");
}
</style><path class="rj6xlccuw"/>`,
		"fallback": "ic:sharp-content-copy",
	});
}

export default Component;
