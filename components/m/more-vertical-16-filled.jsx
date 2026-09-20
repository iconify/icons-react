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
		"content": `<style>.xi3uo3lof {
  fill: currentColor;
  d: path("M8 5.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m0 4a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M6.75 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 0 0-2.5 0");
}
</style><path class="xi3uo3lof"/>`,
		"fallback": "fluent:more-vertical-16-filled",
	});
}

export default Component;
