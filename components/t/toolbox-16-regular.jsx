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
		"content": `<style>.ky8izlbuq {
  fill: currentColor;
  d: path("M5.007 4.5V5H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-.993v-.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5m1.5-.5h3a.5.5 0 0 1 .5.5V5h-4v-.5a.5.5 0 0 1 .5-.5M4 6h8a1 1 0 0 1 1 1v1h-2v-.5a.5.5 0 0 0-1 0V8H6v-.5a.5.5 0 0 0-1 0V8H3V7a1 1 0 0 1 1-1m6 3v.5a.5.5 0 0 0 1 0V9h2v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9h2v.503a.5.5 0 0 0 1 0V9z");
}
</style><path class="ky8izlbuq"/>`,
		"fallback": "fluent:toolbox-16-regular",
	});
}

export default Component;
