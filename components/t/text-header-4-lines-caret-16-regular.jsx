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
		"content": `<style>.czot0abxk {
  fill: currentColor;
  d: path("M14.5 12.998a.5.5 0 0 1 0 1h-13a.5.5 0 1 1 0-1zm0-2.998a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1zM1.502 1.999a.5.5 0 0 1 .5.5v2.002h3V2.5a.5.5 0 0 1 1 0v5a.5.5 0 1 1-1 0V5.501h-3v2.003a.5.5 0 0 1-1 0V2.499a.5.5 0 0 1 .5-.5M10.1 2.2a.501.501 0 0 1 .9.3V6h.5l.1.01a.5.5 0 0 1 0 .98l-.1.01H11v.5a.5.5 0 0 1-1 0V7H7.5a.5.5 0 0 1-.4-.8zM14.502 4a.502.502 0 0 1 .354.854l-1 1.001a.5.5 0 0 1-.708 0l-1.001-1A.5.5 0 0 1 12.5 4zM8.5 6H10V4z");
}
</style><path class="czot0abxk"/>`,
		"fallback": "fluent:text-header-4-lines-caret-16-regular",
	});
}

export default Component;
