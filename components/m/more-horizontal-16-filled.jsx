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
		"content": `<style>.pggr1dujj {
  fill: currentColor;
  d: path("M5.25 8a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m4 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12 9.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5");
}
</style><path class="pggr1dujj"/>`,
		"fallback": "fluent:more-horizontal-16-filled",
	});
}

export default Component;
