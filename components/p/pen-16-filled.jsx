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
		"content": `<style>.kce4a9ftr {
  fill: currentColor;
  d: path("M10.733 2.56a1.914 1.914 0 0 1 2.707 2.708L12.707 6l.263.262a1.75 1.75 0 0 1 0 2.475l-1.116 1.116a.5.5 0 0 1-.708-.707l1.117-1.116a.75.75 0 0 0 0-1.061L12 6.708l-5.955 5.954a1.65 1.65 0 0 1-.644.398l-2.743.915a.5.5 0 0 1-.632-.633L2.94 10.6a1.65 1.65 0 0 1 .398-.644z");
}
</style><path class="kce4a9ftr"/>`,
		"fallback": "fluent:pen-16-filled",
	});
}

export default Component;
