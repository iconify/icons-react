import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.af2obl-3u {
  fill: currentColor;
  d: path("M2 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4.5 0A.5.5 0 0 1 7 7h2a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5m4.5 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5");
}
</style><path class="af2obl-3u"/>`,
		"fallback": "fluent:line-horizontal-1-dashes-16-regular",
	});
}

export default Component;
