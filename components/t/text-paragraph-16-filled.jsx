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
		"content": `<style>.o4qsiepoc {
  fill: currentColor;
  d: path("M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10 10a.5.5 0 0 1-1 0V11a2.998 2.998 0 1 1 0-6h3.5a.5.5 0 0 1 0 1H14v7.5a.5.5 0 0 1-1 0V6h-1zM2.5 6h5.035q-.27.466-.409 1H2.5a.5.5 0 0 1 0-1m5.035 4a4 4 0 0 1-.409-1H2.5a.5.5 0 0 0 0 1z");
}
</style><path class="o4qsiepoc"/>`,
		"fallback": "fluent:text-paragraph-16-filled",
	});
}

export default Component;
