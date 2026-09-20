import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o1txt7bzx {
  fill: currentColor;
  d: path("M14 2.5a.5.5 0 0 0-1 0V3H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5v.5a.5.5 0 0 0 1 0zM13 16H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5z");
}
</style><path class="o1txt7bzx"/>`,
		"fallback": "fluent:notebook-section-20-regular",
	});
}

export default Component;
