import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gbsiygn_p {
  fill: currentColor;
  d: path("M7.658 1.026a.5.5 0 0 1 .316.632l-3 9a.5.5 0 1 1-.948-.316l3-9a.5.5 0 0 1 .632-.316");
}
</style><path class="gbsiygn_p"/>`,
		"fallback": "fluent:slash-forward-12-regular",
	});
}

export default Component;
